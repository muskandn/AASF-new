import React from "react";
import "./footer.css";
import AASFLogo from "../../assets/svgIcons/aasflogo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
       
      <div className="footer-container">
        <div className="footer-address-container">
          <div className="footer-address-image">
            <AASFLogo width={87} height={100} />
          </div>
          <div className="footer-address-text">
            Address: A201,
            <br />
            ABV-Indian Institute of Information Technology and Management
            Gwalior, <br />
            Morena Link Road, Gwalior, Madhya Pradesh, India, 474015.
          </div>
        </div>
        <div className="footer-menu-container">
          <div className="footer-menu">
            <div className="footer-menu-heading">General</div>
            <div className="footer-menu-items">
              <Link exact to="/">
                Home
              </Link>
            </div>
          </div>
          <div className="footer-menu">
            <div className="footer-menu-heading">Explore</div>
            <div className="footer-menu-items">
              <Link exact to="/abhishar">
                Abhishar
              </Link>
            </div>
            <div className="footer-menu-items">
              <Link exact to="/blogs">
                Blogs
              </Link>
            </div>
            <div className="footer-menu-items">
              <Link exact to="/events">
                Events
              </Link>
            </div>
            <div className="footer-menu-items">
              <Link exact to="/team">
                Team
              </Link>
            </div>
          </div>

          <div className="footer-menu">
            <div className="footer-menu-heading">Contact</div>
            <div className="footer-menu-items">
              <a href="mailto:aasf@iiitm.ac.in">aasf@iiitm.ac.in</a>
            </div>
            <div className="footer-menu-items">
              <a href="mailto:aasf.iiitm@gmail.com">aasf.iiitm@gmail.com</a>
            </div>

            <div className="footer-menu-items">
              <Link exact to="/contact">
                Contact us
              </Link>
            </div>
          </div>
        </div>
        
      </div>
      <div className="footer-socialmedia-icons">
      <a href="https://www.linkedin.com/company/aasf-iiitmg/posts/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/aasf_iiitmg/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/aasfiiitm/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://medium.com/tech-iiitg">
                <i className="fab fa-medium"></i>
              </a>
              <a href="https://www.youtube.com/c/AASFIIITM">
                <i className="fab fa-youtube"></i>
              </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
