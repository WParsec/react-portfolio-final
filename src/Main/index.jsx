import React from "react";
import Header from "../components/header";
import VideoHero from "../components/hero";
import Skill from "../components/skillSlide";

function Main({ videoRef }) {
  return (
    <main>
      <Header />
      <VideoHero videoRef={videoRef} />
      <Skill />
    </main>
  );
}

export default Main;
