import React from "react";
import BackgroundVideo from "../../assets/videos/bg-art.mp4";

function VideoHero({ videoRef }) {
  return (
    <div className="video-background">
      <video preload="auto" ref={videoRef} loop muted playsInline>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        <div className="hero-wrap">
          <h2>Tom Ertvaag</h2>
          <h1>Design & Development</h1>
        </div>
      </div>
    </div>
  );
}

export default VideoHero;
