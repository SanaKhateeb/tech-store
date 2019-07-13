import React from 'react'
import Title from '../Title'
import aboutBcg from  '../../images/aboutBcg.jpeg'

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img src={aboutBcg} className="img-fluid img-thumbnail" alt= "about company" style={{background: "var(--darkGrey)"}}/>
          </div>

          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="About Us" />
            <p className="text-lead text-muted my-3">This is a totally real store offering totally real products at UNREAL prices!!!</p>
            <p className="text-lead text-muted my-3">Feel free to have a look around, and send me some emails in the Contact page.</p>
            <button className="main-link" type="button" style={{marginTop: "2rem"}}>
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
