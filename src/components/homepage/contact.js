import React from "react";
import "./home.css";

const Contact = () => {
  return (
    <section style={{ marginTop: "70px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 contact-info">
            <ul className="contact-list">
              <li>
                <h3 className="title">Contact:</h3>
              </li>
              <li>
                <h6>
                  <span className="bi bi-whatsapp"></span>&nbsp;Whatsapp: 
                  <a
                    href="https://wa.me/6285700702605"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +62 857 0070 2605
                  </a>
                </h6>
              </li>
              <li>
                <h6>
                  <span className="bi bi-envelope"></span>&nbsp;Email: 
                  <a href="mailto:gaissuai@gmail">gaissuai@gmail</a>
                </h6>
              </li>
              <li>
                <h6>
                  <span className="bi bi-geo-alt"></span>&nbsp;
                  <a
                    href="https://maps.app.goo.gl/2pkXYTeCJuFNYhec9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click For Location
                  </a>
                </h6>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/that_verix?igsh=ejIxYnViYnlhazdq" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <span className="bi bi-instagram"></span>
                </a>
                <a href="https://www.tiktok.com/@verixisfine?_t=8quU4Ma53i5&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <span className="bi bi-tiktok"></span>
                </a>
                <a href="https://youtube.com/@gaissuai?si=q9ho0KjRI1Gqc_ih" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <span className="bi bi-youtube"></span>
                </a>
                <a href="https://discord.com/invite/5k49uUmD" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                  <span className="bi bi-discord"></span>
                </a>
                <a href="https://github.com/FauziSaputra666" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <span className="bi bi-github"></span>
                </a>
                <a href="https://t.me/verixhz" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <span className="bi bi-telegram"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
