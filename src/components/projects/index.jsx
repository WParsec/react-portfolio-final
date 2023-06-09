import React from "react";

import holidayz from "../../assets/Holidayz-screenshot.png";
import gavelbay from "../../assets/gavelbay.png";
import daily from "../../assets/reactEcom.png";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-content">
          <div className="h1-wrap">
            <h1>Projects</h1>
          </div>
          <div className="projects-wrap">
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
            <div className="project-outer">
              <div className="project">
                <div className="project-inner">
                  <div className="project-img">
                    <img src={daily} alt="project 3 img" />
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h5>React eCom Project | Daily</h5>
                <p>
                  My first React Project at Noroff Frontend Studies. The project
                  was ungraded, but received excellent feedback.
                </p>
                <div className="project-link-div">
                  <a href="https://github.com/WParsec/React-eCom">Github</a> |
                  <a href="https://wparsec.github.io/React-eCom">Live site</a>
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
