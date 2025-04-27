import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero-section">
      <p className="hero-main-title">
        Upload to <span>Uncover</span>
      </p>
      <p className="hero-sub-title">AI That Spots the Lies!</p>
      <Link to="/upload">
        <button className="upload-file-button">Drop File To Verify</button>
      </Link>
    </div>
  );
};

export default Hero;
