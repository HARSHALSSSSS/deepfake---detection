import React from "react";
import { Link } from "react-scroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DocumentationPara from "../components/DocumentationPara";
import DocumentationTable from "../components/DocumentationTable";

const Documentation = () => {
  return (
    <div className="documentation-page">
      <Navbar />
      <div className="documentation-button-and-details">
        <div className="documentation-buttons">
          <Link
            to="doc-section-1"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <p className="documentation-buttons-pointer">What is Deepfake?</p>
          </Link>

          <Link
            to="doc-section-2"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <p className="documentation-buttons-pointer">How It Works</p>
          </Link>

          <Link
            to="doc-section-3"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <p className="documentation-buttons-pointer">Upload & Detect</p>
          </Link>
        </div>
        <div className="documentation">
          <h2 id="doc-section-1">What is Deepfake?</h2>
          <DocumentationPara
            title="Introduction to Deepfakes"
            details="Deepfakes are artificially generated or altered videos, images, or audio clips that use artificial intelligence to manipulate content in a way that appears realistic. These manipulations often involve changing a person’s face, altering speech, or even creating entirely synthetic voices and characters."
          />
          <DocumentationPara details="Deepfake technology is powered by deep learning techniques, particularly Generative Adversarial Networks (GANs), which train on large datasets of real human faces and voices to generate fake but highly convincing media." />
          <DocumentationPara
            title="How Do Deepfakes Work?"
            details="Deepfake creation typically involves the following steps:"
          />
          <DocumentationTable
            title=""
            listItems={[
              {
                title: "Data Collection ",
                details:
                  " Thousands of images or voice recordings of a person are gathered to train an AI model.",
              },
              {
                title: "Face and Voice Encoding ",
                details: " AI models map facial features and voice patterns.",
              },
              {
                title: "Deep Learning Model Training ",
                details:
                  "A GAN or autoencoder learns to generate and refine synthetic outputs.",
              },
              {
                title: "Manipulation and Rendering ",
                details:
                  "The AI model swaps faces, syncs speech, or clones a voice to create a fake video.",
              },
            ]}
          />
          <DocumentationPara title="Types of Deepfake Manipulations" />
          <DocumentationTable
            title=""
            listItems={[
              {
                title: "Face Swapping ",
                details:
                  "One person’s face is seamlessly replaced with another’s.",
              },
              {
                title: "Lip-Syncing Manipulation ",
                details:
                  "The lip movements in a video are modified to match altered speech.",
              },
              {
                title: "Voice Cloning ",
                details:
                  "AI-generated voices mimic real individuals with high accuracy.",
              },
              {
                title: "Full Body Manipulation  ",
                details:
                  "Entire body gestures and movements are synthesized to create a fake video.",
              },
            ]}
          />
          <DocumentationPara title="Why Are Deepfakes Dangerous?" />
          <DocumentationTable
            title=""
            listItems={[
              {
                title: "Misinformation & Fake News",
                details:
                  " Politicians and public figures can be misrepresented.",
              },
              {
                title: "Fraud & Identity Theft ",
                details:
                  "Scammers can impersonate someone for malicious purposes.",
              },
              {
                title: "	Cybersecurity Threats ",
                details:
                  "Deepfake phishing attacks and video authentication fraud are rising concerns.",
              },
              {
                title: "Social & Psychological Impact",
                details:
                  "False information can manipulate public opinion and damage reputations.",
              },
            ]}
          />
          <DocumentationPara details="With the rise of AI-driven manipulations, detecting deepfakes has become essential for digital trust and security." />
          <h2 id="doc-section-2">How Our AI Detects Deepfakes</h2>
          <DocumentationPara
            title=""
            details="Our deepfake detection software is built using cutting-edge AI models that analyze three key modalities to determine if a video has been manipulated:"
          />
          <DocumentationTable
            title="Lips Manipulation Detection"
            listItems={[
              {
                title: "",
                details:
                  "We use AI-based phoneme-to-viseme matching to compare spoken words with lip movements.",
              },
              {
                title: "",
                details:
                  "Any mismatch between what is spoken and how the lips move is flagged as suspicious.",
              },
              {
                title: "",
                details:
                  "This is particularly useful in detecting lip-synced videos, where a different speech track has been artificially added.",
              },
            ]}
          />
          <DocumentationTable
            title="Face Manipulation Detection"
            listItems={[
              {
                title: "",
                details:
                  "Our AI models detect unnatural blending of facial features, inconsistencies in skin texture, and unrealistic expressions.",
              },
              {
                title: "GAN",
                details:
                  "The model compares the facial structure in different frames to detect frame-to-frame inconsistencies",
              },
              {
                title: "",
                details:
                  "The model compares the facial structure in different frames to detect frame-to-frame inconsistencies.",
              },
            ]}
          />
          <DocumentationTable
            title="Audio Manipulation Detection"
            listItems={[
              {
                title: "",
                details:
                  "	AI scans for speech irregularities, unnatural pauses, and pitch distortions that suggest AI-generated voices.",
              },
              {
                title: "",
                details:
                  "Background noise consistency is analyzed to check for artificial speech insertion.",
              },
              {
                title: "",
                details:
                  "Advanced spectrogram analysis is performed to detect waveform abnormalities unique to deepfake voices.",
              },
            ]}
          />
          <DocumentationPara title="End-to-End Detection Pipeline" details="" />
          <DocumentationTable
            title=""
            listItems={[
              {
                title: "Preprocessing",
                details: "Video is split into frames and audio is extracted.",
              },
              {
                title: "Feature Extraction ",
                details:
                  "AI models analyze facial landmarks, phoneme synchronization, and voice patterns.",
              },
              {
                title: "Deep Learning Evaluation ",
                details:
                  "A final model decision determines the probability of manipulation.",
              },
              {
                title: "Confidence Scoring",
                details:
                  "Results are displayed, showing the likelihood of the video being a deepfake.",
              },
            ]}
          />

          <DocumentationPara
            title=""
            details="By combining these techniques, our software provides a robust and accurate deepfake detection system."
          />

          <h2 id="doc-section-3">How to Check if a Video is a Deepfake?</h2>

          <DocumentationPara
            title=""
            details="Using our deepfake detection platform is simple and efficient. Follow these steps:"
          />

          <DocumentationTable
            title="Step 1: Upload a Video"
            listItems={[
              {
                title: "",
                details: "Click on the “Upload” button on our platform.",
              },
              {
                title: "",
                details:
                  "Choose a video file (MP4, AVI, MOV, etc.) from your device.",
              },
              {
                title: "",
                details:
                  "	The video should be clear, with visible facial features and audible speech for better accuracy.",
              },
            ]}
          />

          <DocumentationTable
            title="Step 2: AI Processing & Analysis"
            listItems={[
              {
                title: "",
                details:
                  "The AI system extracts frames and audio from the video.",
              },
              {
                title: "",
                details:
                  "The deep learning models analyze the video for manipulations in lips, face, and audio.",
              },
              {
                title: "",
                details:
                  "Each frame undergoes a forensic scan to detect irregularities.",
              },
            ]}
          />

          <DocumentationTable
            title="Step 3: Get the Results"
            listItems={[
              {
                title: "",
                details:
                  "A detailed report will be generated indicating if the video is real or manipulated.",
              },
              {
                title: "",
                details:
                  "Confidence scores will be provided for : ✅ Lips Manipulation ✅ Face Manipulation ✅ Audio Manipulation",
              },
              {
                title: "",
                details:
                  "If a deepfake is detected, the report will highlight which part of the video is most suspicious.",
              },
            ]}
          />

          <DocumentationTable
            title="Example of Results Interpretation"
            listItems={[
              {
                title: "Low Deepfake Probability (0-30%) ",
                details: " Likely real",
              },
              {
                title: "Moderate Deepfake Probability (31-70%) ",
                details: "Possible manipulation",
              },
              {
                title: "High Deepfake Probability (71-100%) ",
                details: "Likely deepfake",
              },
            ]}
          />

          <DocumentationTable
            title="Why Use Our Deepfake Detection Tool?"
            listItems={[
              { title: "", details: " Fast and accurate analysis." },
              { title: "", details: "Works on multiple video formats." },
              { title: "", details: "Provides detailed confidence scores." },
              {
                title: "",
                details:
                  " Easy-to-use interface for both individuals and organizations.",
              },
            ]}
          />

          <DocumentationPara
            title=""
            details="This tool ensures that users can quickly verify video authenticity and prevent misinformation, fraud, and identity theft."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
