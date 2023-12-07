import React from "react";

import holidayz from "../../assets/holidayz.webp";
import cabanyal from "../../assets/cabanyal.webp";
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
                    <img src={cabanyal} alt="project 2 img" />
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h5>Valencia | Cabanyal</h5>
                <p>
                  A project for a client in Valencia, Spain who wanted an
                  informative page about the Cabanyal area in Valencia where she
                  has a property for rent. The client shut down the project
                  mid-development due to personal reasons, but were happy with
                  results so far.
                </p>
                <div className="project-link-div">
                  <a href="https://github.com/WParsec/bienvenidos-cabanyal">
                    Github
                  </a>
                  |
                  <a href="https://endearing-seahorse-423802.netlify.app/">
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
