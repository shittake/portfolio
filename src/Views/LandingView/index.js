import React, { useState } from "react";
import "../../styles/dashboard/index.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Collapse, Button } from "react-bootstrap";

export const LandingView = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="portfolio-container">
      <div class="container">
        <div class="row">
          <div class="col">
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
          </div>
          <div class="col">
            <div className="info-container">
              <h className="header">Eric Leow Yu Quan</h>
              <p className="subheader">Software Engineer</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 offset-3 d-flex justify-content-center">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="collapse-text"
              aria-expanded={isOpen}
              style={{
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
                padding: "10px 20px",
                backgroundColor: "#1a1a1a",
                color: "#fff",
                borderRadius: "10px",
                border: "2px solid #444",
                cursor: "pointer",
              }}
            >
              Notable achievements
            </Button>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-center">
            <Collapse in={isOpen}>
              <div id="collapse-text" className="collapse-text">
                <p>This is the content that will be collapsed or expanded.</p>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};
