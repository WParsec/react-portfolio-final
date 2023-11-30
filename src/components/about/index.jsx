import React, { useState, useEffect } from "react";

import me from "../../assets/front-black.png";

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
                I am a Norwegian front-end developer and designer based in
                Bergen. <br />
                By combining my passion for visual esthetics, great user
                experience and efficient code, I create website with X-factor -
                from start to finish.
                <br />
                Whether you want a portfolio-page, an informative page for your
                business or a blog for your cat, do it with <span>style.</span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="image-div"
          style={{ backgroundImage: `url(${me})` }}
        ></div>
      </div>
    </section>
  );
}

export default About;
