import React from "react";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <section style={{marginTop: "30px"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p style={{ color: "white" }}><i className="bi bi-c-circle"></i> {currentYear} Fauzi Saputra</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
