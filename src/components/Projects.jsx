import wastewise from "../assets/wastewise.png";
import localfinder from "../assets/localfinder.png";
import neatify from "../assets/neatify.png";
import poseform from "../assets/poseform.png";
import translator from "../assets/translator.png";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <p className="projects-small">Portfolio</p>
      <h2 className="projects-heading">Here is Some of My Project</h2>

      <div className="projects-grid">

        <div className="project-card">
          <img src={wastewise} alt="WasteWise" />
          <p>WasteWise</p>
        </div>

        <div className="project-card">
          <img src={localfinder} alt="LocalFinder" />
          <p>LocalFinder</p>
        </div>

        <div className="project-card">
          <img src={neatify} alt="Neatify" />
          <p>Neatify</p>
        </div>

        <div className="project-card">
          <img src={poseform} alt="PoseForm API" />
          <p>PoseForm API</p>
        </div>

        <div className="project-card">
          <img src={translator} alt="Language Translator" />
          <p>Language Translator App</p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
