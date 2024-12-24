import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          Interested in learning more? Send us a message and we'll be in touch soon.
        </p>
        <form className="contact__form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
