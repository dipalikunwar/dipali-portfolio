const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">
        Technologies and tools I use to build real-world applications
      </p>

      <div className="skills-cards">

        <div className="skill-card">
          <div className="icon">🛠️</div>
          <h3>Programming</h3>
          <p>Java, JavaScript, Kotlin, Python, SQL, HTML</p>
        </div>

        <div className="skill-card active">
          <div className="icon">⚙️</div>
          <h3>Frameworks</h3>
          <p>React.js, Node.js, Express.js, Redux, Tailwind, Bootstrap</p>
        </div>

        <div className="skill-card">
          <div className="icon">💻</div>
          <h3>Tools</h3>
          <p>Git, GitHub, Postman, VS Code, Selenium, Docker</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
