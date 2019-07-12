import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/ProductsPage/Products'
import productBcg from '../images/productsBcg.jpeg'

export default function ProductsPage() {
  return (
    <>
      <Hero img={productBcg} />
      <Products />
    </>
  )
}
