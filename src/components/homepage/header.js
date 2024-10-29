import React from "react";
import "./home.css";

const Header = () => {
  return (
    <section style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              className="img-header img-fluid rounded-circle border border-3"
              src="/images/pfp.png"
              style={{
                width: "50%",
                marginBottom: "20px",
              }}
            />
          </div>
          <div className="col-md-8 align-self-center">
            <h2 className="title" style={{ color: "whites"}}>
              Hi I'm Fauzi Saputra
            </h2>
            <p className="sub-title">I am a frontend developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
