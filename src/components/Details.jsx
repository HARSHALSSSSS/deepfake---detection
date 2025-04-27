import React from "react";
import eye from "../assets/img/Eye.png";
import audio from "../assets/img/Audio.png";
import lips from "../assets/img/Lips.png";
const Details = () => {
  return (
    <div className="deepfake-detection-modalities">
      <p className="deepfake-detection-modalities-details">
        <span>Expose Deepfakes </span>
        with Cutting-Edge AI
      </p>
      <div className="modality-specs">
        <div>
          <img src={eye} className="logo-deepfake-modality" />
        </div>
        <p>
          Our AI-powered detection system analyzes facial inconsistencies and
          unnatural movements to uncover deepfakes with precision. It detects
          micro-expressions, unnatural blinking, and motion anomalies that
          reveal manipulation. Stay ahead of deception—upload and verify
          authenticity in seconds!
        </p>
      </div>
      <div className="modality-specs">
        <div>
          <img src={lips} className="logo-deepfake-modality" />
        </div>
        <p>
        Our AI detects lip-sync mismatches by analyzing speech and facial movements frame by frame. It identifies delays, unnatural mouth motions, and discrepancies between audio and lip movements that signal manipulation. Ensure authenticity—upload and verify with precision!
        </p>
      </div>
      <div className="modality-specs">
        <div>
          <img src={audio} className="ogo-deepfake-modality" />
        </div>
        <p>
        Our system analyzes voice anomalies by comparing speech patterns, tone, and cadence to detect inconsistencies. It identifies unnatural pauses, mismatched intonations, and irregularities that suggest AI manipulation. Trust the technology to reveal the truth—upload and verify voice authenticity instantly!
        </p>
      </div>
    </div>
  );
};

export default Details;
