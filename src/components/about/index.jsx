import React, { useState, useEffect } from "react";

import me from "../../assets/me.png";

function About() {
  const creationsArray = [
    "web applications",
    "logos",
    "portfolio sites",
    "music",
    "websites",
    "good relationships",
  ];

  const [creations, setCreations] = useState("");
  const [creationIndex, setCreationIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(
    () => {
      const timer = setTimeout(
        () => {
          if (
            !isDeleting &&
            letterIndex < creationsArray[creationIndex].length
          ) {
            setCreations(
              (prev) => prev + creationsArray[creationIndex][letterIndex]
            );
            setLetterIndex((prev) => prev + 1);
          }

          if (
            !isDeleting &&
            letterIndex === creationsArray[creationIndex].length
          ) {
            setTimeout(() => setIsDeleting(true), 1000);
          }

          if (isDeleting && letterIndex > 0) {
            setCreations((prev) => prev.slice(0, prev.length - 1));
            setLetterIndex((prev) => prev - 1);
          }

          if (isDeleting && letterIndex === 0) {
            setIsDeleting(false);
            setCreationIndex((prev) => (prev + 1) % creationsArray.length);
          }
        },
        isDeleting ? 40 : 80
      );

      return () => clearTimeout(timer);
    }, // eslint-disable-next-line
    [creations, isDeleting, letterIndex]
  );

  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-flex">
          <div className="about-content">
            <div className="top">
              <h1>
                Hello There! I'm <span>Tom</span>
              </h1>
              <p>
                And I love to create <span>{creations}</span>
              </p>
            </div>
            <div className="bottom">
              <p>
                I am a Norwegian front-end developer and designer currently
                based in Valencia, Spain. <br /> I aspire to combine my skills
                in various art-forms to provide unique portfolio websites with X
                factor. <br /> So you can showcase your art with{" "}
                <span>style.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="image-div">
          <img src={me} alt="me" />
        </div>
      </div>
    </section>
  );
}

export default About;
