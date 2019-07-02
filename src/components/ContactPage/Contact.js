import React, { Component } from 'react'
import Title from '../Title'

export default class Contact extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="Contact Us" />
            <form className="mt-5">
              {/* first name */}
              <div className="form-group">
                <input type="text" name="firstName" placeholder="First Last" className="form-control"/>
              </div>    

              {/* email */}
              <div className="form-group">
                <input type="email" name="email" placeholder="123@example.com" className="form-control"/>
              </div>

              {/* subject */}
              <div className="form-group">
                <input type="text" name="subject" placeholder="Gimme Item" className="form-control"/>
              </div>

              {/* message */}
              <div className="form-group">
                <textarea name="message" rows="10" className="form-control" placeholder="Hello, I really want this item added to the store. Gimme." />
              </div>

            </form>
          </div>
        </div>
      </section>
    )
  }
}
