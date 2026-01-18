const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-text">
          <h1>
            Hello, I’m <br />
            Dipali Kunwar
          </h1>

          <h3>Software Engineer</h3>

          <p>
            I build real-world web & Android applications with clean UI
            and scalable backend systems.
          </p>

          <button className="hero-btn">Contact Me</button>
        </div>

        {/* RIGHT */}
        <div className="hero-image-wrap">
          <div className="circle-bg"></div>

          <img
            src="/src/assets/profile.png"
            alt="Dipali"
            className="hero-img"
          />

          <span className="tag tag-learner">Learner</span>
          <span className="tag tag-optimistic">Optimistic</span>
          <span className="tag tag-honest">Honest</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
