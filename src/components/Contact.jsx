const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

        <div className="contact-left">
          <h2>
            Contact me <br /> for more <br /> details.
          </h2>
        </div>

        <div className="contact-card">
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" required />

            <label>Message</label>
            <textarea rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
