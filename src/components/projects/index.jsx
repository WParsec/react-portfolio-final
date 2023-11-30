import React from "react";

import holidayz from "../../assets/Holidayz-screenshot.png";
import gavelbay from "../../assets/gavelbay.png";
import iris from "../../assets/instantiris.webp";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-content">
          <div className="h1-wrap">
            <h1>Design {"&"} Dev Projects</h1>
          </div>
          <div className="projects-wrap">
            <div className="project-outer">
              <div className="project">
                <div className="project-inner">
                  <div className="project-img">
                    <img src={iris} alt="project 1 img" />
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h5>Instantiris.no</h5>
                <p>
                  Over the course of a few months, I created the complete
                  design, website and booking system of Instant Iris, an
                  iris-photography company located in the center of Bergen.
                </p>
                <div className="project-link-div">
                  <a href="https://instantiris.no">Live site</a>
                </div>
              </div>
            </div>
            <div className="project-outer">
              <div className="project">
                <div className="project-inner">
                  <div className="project-img">
                    <img src={holidayz} alt="project 1 img" />
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h5>Holidayz | Final Exam</h5>
                <p>
                  The final exam at Noroff Frontend Studies. The project
                  received an A grade.
                </p>
                <div className="project-link-div">
                  <a href="https://github.com/WParsec/holidayz-exam-project">
                    Github
                  </a>
                  |
                  <a href="https://cerulean-melba-ba6cf3.netlify.app/">
                    Live site
                  </a>
                </div>
              </div>
            </div>
            <div className="project-outer">
              <div className="project">
                <div className="project-inner">
                  <div className="project-img">
                    <img src={gavelbay} alt="project 2 img" />
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h5>Semester Project 2 | Gavelbay</h5>
                <p>
                  The semester project for 3rd semester at Noroff Frontend
                  Studies. The project received an A grade.
                </p>
                <div className="project-link-div">
                  <a href="https://github.com/WParsec/Semester-Project-2">
                    Github
                  </a>
                  |
                  <a href="https://wparsec.github.io/Semester-Project-2/">
                    Live site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
