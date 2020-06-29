import React from "react"
import Title from "../components/Title"

const Contact = () => {
  return (
    <section className="contact-page-component" id="contact">
      <Title title="Contact" />
      <article className="contact-form">
        <form action="">
          <div className="form-group">
            <input type="text" placeholder="name" className="form-control" />
            <input type="email" placeholder="email" className="form-control" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="message here"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            Submit here
          </button>
        </form>
      </article>
    </section>
  )
}

export default Contact
