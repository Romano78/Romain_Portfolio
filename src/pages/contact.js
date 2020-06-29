import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="contact page" description="contact me" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/maypddvp" method="POST">
            <div className="form-group">
              <input type="text" placeholder="name" className="form-control" />
              <input
                type="email"
                placeholder="email"
                className="form-control"
              />
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
    </Layout>
  )
}

export default contact
