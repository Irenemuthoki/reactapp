import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  const openWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=254705953882",
      "_blank"
    );
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>00100 Nairobi.</p>
              <p>irene</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +245-705953882
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              irenemuthoki21@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>This is irene. CEO & founder of Tech</p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <div className="whatsapp-icon" onClick={openWhatsapp}>
              <FaWhatsapp size={30} style={{ color: "#fff" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
