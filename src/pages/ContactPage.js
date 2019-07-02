import React from 'react'
import Contact from '../components/ContactPage/Contact'
import Hero from '../components/Hero'
import contactImg from '../images/contactBcg.jpeg'

export default function ContactPage() {
  return (
    <React.Fragment>
      <Hero img={contactImg} />
      <Contact />
    </React.Fragment>
  )
}
