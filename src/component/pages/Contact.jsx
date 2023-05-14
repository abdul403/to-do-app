import React from "react";

export default function Contact() {
  return (
    <>
      <h3 className="contact-header">Contact Me</h3>
      <div className="contact">
        <form className="form">
          <input className="form-input" type="text" placeholder="first name" />
          <input className="form-input" type="text" placeholder="last name" />
          <input className="form-input" type="text" placeholder="email" />
          <input className="form-input" type="text" placeholder="contact no" />
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>

        <hr />
        <button className="email-btn">
         
          <a className="email" href="https://gmail.com">
          Email: babbu36790@gmail.com
          </a>
        </button>
      </div>
    </>
  );
}
