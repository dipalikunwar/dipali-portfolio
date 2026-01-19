import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wijgswa",
        "template_txjv867",
        formRef.current,
        "E9JbY_853Dnv1LWJy"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

        <div className="contact-left">
          <h2>Let’s work together</h2>
          <p>Have a project or just want to say hi?</p>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="contact-card">
          <label>Name</label>
          <input type="text" name="name" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <label>Message</label>
          <textarea name="message" rows="4" required />

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
