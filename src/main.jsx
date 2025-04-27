import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./stylesheets/index.css";
import "./stylesheets/navbar.css";
import "./stylesheets/preloader.css";
import "./stylesheets/hero.css";
import "./stylesheets/details.css";
import "./stylesheets/footer.css";
import "./stylesheets/upload.css";
import "./stylesheets/documentation.css";
import "./stylesheets/SampleVideo.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
