import React from "react";
import "../../styles/dashboard/index.css";
import FormalPicture from "../../Assets/FormalPicture.jpg";

export const LandingView = () => {
  return (
    <div className="portfolio-container">
      <div className="circle-background">
        <img
          className="profile-image"
          onClick={() =>
            window.open(
              "https://sg.linkedin.com/in/eric-leow-yu-quan-a38487157",
              "_blank"
            )
          }
        />
      </div>
      <div className="info-container">
        <h className="header">Eric Leow Yu Quan</h>
        <p className="subheader">Software Engineer</p>
      </div>
    </div>
  );
};
