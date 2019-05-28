import React from 'react'
import {ProductConsumer} from '../context';
import Hero from '../components/Hero.js';
import {Link} from 'react-router-dom';

export default function HomePage() {
  return (
    <Hero title="Awesome Gadgets" max="true">
      <Link className="main-link" style={{margin: "2rem"}} to='/products'>
        Our Products
      </Link>
    </Hero>
  )
}
