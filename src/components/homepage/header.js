import React from "react";
import "./home.css";

const Header = () => {
  return (
    <section style={{paddingTop: "50px"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid" src="/images/pp1.png" style={{borderRadius: "100%"}}/>
          </div>
          <div className="col-md-8">
            <h2 className="title" style={{ color: "white" }}>
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
