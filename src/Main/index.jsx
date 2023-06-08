import React from "react";
import Header from "../components/header";
import VideoHero from "../components/hero";
import Skill from "../components/skillSlide";
import About from "../components/about";
import Projects from "../components/projects";

function Main({ videoRef }) {
  return (
    <main>
      <Header />
      <VideoHero videoRef={videoRef} />
      <Skill />
      <About />
      <Projects />
    </main>
  );
}

export default Main;
