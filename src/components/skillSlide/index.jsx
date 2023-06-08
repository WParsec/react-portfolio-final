import React, { useEffect, useRef, useState } from "react";

function Skill() {
  const [scrollSpeed, setScrollSpeed] = useState(0.4);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth <= 768) {
        setScrollSpeed(0.7);
      } else {
        setScrollSpeed(0.25);
      }
    };

    handleSize();

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const skills = [
    "Logo Design",
    "Music Production",
    "Web Design",
    "Web Development",
  ];
  const scrollRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = window.pageYOffset * scrollSpeed;
      scrollRef.current.style.transform = `translateX(-${scrollLeft}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollSpeed]);

  return (
    <div className="container">
      <div className="skill-content">
        <ul ref={scrollRef}>
          {skills.map((skill, index) => (
            <li key={`skill-${index}`}>
              <p>{skill}</p>
            </li>
          ))}
          {skills.map((skill, index) => (
            <li key={`skill-2-${index}`}>
              <p>{skill}</p>
            </li>
          ))}
          {skills.map((skill, index) => (
            <li key={`skill-3-${index}`}>
              <p>{skill}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skill;
