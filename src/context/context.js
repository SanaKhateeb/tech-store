import React, { Component } from 'react'
import {linkData} from './linkData'
import {socialData} from './socialData'
import {items} from './productData'

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: false,
  }

  componentDidMount() {
    // Will add content from Contentful instead
    this.setProducts(items);
  }
  
  setProducts = (products) => {
    let storeProducts = products.map(item => {
      const {id} = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = {id, ...item.fields, image};
      return product
    });

    let featuredProducts = storeProducts.filter(item => item.featured === true);

    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
    }, () => {
      this.addTotals();
    })
  }

  getStorageProduct = () => {
    return localStorage.getItem('singleProduct') ? JSON.parse(localStorage.getItem('singleProduct')) : {}
  }

  getStorageCart = () => {
    let cart;
    
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    else {
      cart = [];
    }

    return cart;
  }

  /* Calculates whole cart subtotal, tax, and grand total */
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.itemTotal;
      cartItems += item.count;
    })

    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.08;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));

    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };

  addTotals = () => {
    const totals = this.getTotals();
    
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total,
    })
  };

  syncStorage = () => {
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
  };

  addToCart = (id) => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);

    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let itemTotal = tempItem.price;
      let cartItem = {...tempItem, count: 1, itemTotal}
      tempCart = [...tempCart, cartItem];
    }
    else {
      tempItem.count++;
      tempItem.itemTotal = tempItem.price * tempItem.count;
      tempItem.itemTotal = parseFloat(tempItem.itemTotal.toFixed(2));
    }

    this.setState({
      cart: tempCart
    }, () => {
      this.addTotals();
      this.syncStorage();
      this.openCart();
    })
  };

  setSingleProduct = (id) => {
    let product = this.state.storeProducts.find(item => item.id === id);

    localStorage.setItem('singleProduct', JSON.stringify(product));
    
    this.setState({
      singleProduct: {...product},
      loading: false
    })
  }

  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  }

  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    })
  }
  
  closeCart = () => {
    this.setState({
      cartOpen: false
    })
  }

  openCart = () => {
    this.setState({
      cartOpen: true
    })
  }

  /* Cart Page Functions */
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    console.log(cartItem);

    cartItem.count++;
    cartItem.itemTotal = cartItem.count * cartItem.price;
    cartItem.itemTotal = parseFloat(cartItem.itemTotal.toFixed(2));

    this.setState({
      cart: [...tempCart]
    }, () => {
      this.addTotals();
      this.syncStorage();
    });
  }

  decrement = (id) => {
    console.log(id);
  }

  removeItem = (id) => {
    console.log(id);
  }

  clearCart = (id) => {
    console.log("Cart has been cleared")
  }


  render() {
    return(
      <ProductContext.Provider 
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};