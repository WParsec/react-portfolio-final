import React from "react";

import holidayz from "../../assets/Holidayz-screenshot.png";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-content">
          <div className="h1-wrap">
            <h1>Projects</h1>
          </div>
          <div className="projects-wrap">
            <div className="project">
              <div className="project-inner">
                <div className="project-img">
                  <img src={holidayz} alt="project 1 img" />
                </div>
              </div>
            </div>
            <div className="project">Project 2</div>
            <div className="project">Project 2</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
