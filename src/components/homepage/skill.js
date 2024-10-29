import React from "react";
import "./home.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Skill = () => {
  return (
    <section style={{ marginTop: "80px" }}>
      <div className="container">
        <h2 className="title text-center" style={{ marginBottom: "30px" }}>
          My Skill
        </h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p style={{ color: "white", marginTop: "10px" }}>
              <span className="bi bi-filetype-html"></span>&nbsp;HTML
            </p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "75%" }}>
                75%
              </div>
            </div>
            <p style={{ color: "white", marginTop: "10px" }}>
              <span className="bi bi-filetype-css"></span>&nbsp;CSS
            </p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "50%" }}>
                50%
              </div>
            </div>
            <p style={{ color: "white", marginTop: "10px" }}>
              <span className="bi bi-filetype-js"></span>&nbsp;JavaScript
            </p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "40%" }}>
                40%
              </div>
            </div>
            <p style={{ color: "white", marginTop: "10px" }}>
              <span className="bi bi-filetype-php"></span>&nbsp;PHP
            </p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "30%" }}>
                30%
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <p style={{ color: "white", marginTop: "10px" }}>
              <span className="bi bi-bootstrap"></span>&nbsp;Bootstrap
            </p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "50%" }}>
                50%
              </div>
            </div>
            <p style={{ color: "white", marginTop: "10px" }}>
              <span className="bi bi-filetype-sql"></span>&nbsp;SQL
            </p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "40%" }}>
                40%
              </div>
            </div>
            <p style={{ color: "white", marginTop: "10px" }}>
              <span className="bi bi-filetype-ppt"></span>&nbsp;PowerPoint
            </p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "80%" }}>
                80%
              </div>
            </div>
            <p style={{ color: "white", marginTop: "10px" }}>C#</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="45"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "45%" }}>
                45%
              </div>
            </div>
          </div>
        </div>
        <div className="row align-self-center">
          <div className="col-md-6">
            <h5 className="title" style={{marginTop: "30px"}}>
              <span className="bi bi-translate"></span>&nbsp;Language
            </h5>
            <p style={{ color: "white", marginTop: "10px" }}>Indonesia</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "95%" }}>
                95%
              </div>
            </div>
            <p style={{ color: "white", marginTop: "10px" }}>English</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "60%" }}>
                60%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
