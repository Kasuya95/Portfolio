import React from "react";

const ContactBox = () => {
  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>you have a project in your mind, contact me here</span>
      </div>
      <div className="row" >
        <div className="col">
          <div className="contact-info">
            <h2>Find Me <i className="uil uil-corner-right-down"></i></h2>
            <p><i className="uil uil-envelope"></i>Email: thunva2004@gmail.com</p>
            <p><i className="uil uil-phone"></i>Tel: +66 83 154 2243</p>
          </div>
        </div>
        <div className="col">
        <div className="form-control">
          <div className="form-inputs">
            <input type="text" className="text input-field" placeholder="Name" />
            <input type="text" className="text input-field" placeholder="Email" />
          </div>
          <div className="text-area">
            <textarea placeholder="Message"></textarea>
          </div>
          <div className="form-button">
            <button className="btn">
            send <i className="uil uil-message"></i>
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
};
export default ContactBox;
