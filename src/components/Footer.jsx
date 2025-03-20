import React from "react";
import footerLogo from "../../public/assets/images/footer-log.png";
import fbIcon from "../../public/assets/images/fb.png";
import instaIcon from "../../public/assets/images/insta.png";
import linkedinIcon from "../../public/assets/images/linkdin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_top">
          {/* Logo for smaller screens */}
          <a href="#" className="footer_logo d-block d-sm-block d-md-block d-lg-none">
            <img src={footerLogo} alt="Footer Logo" className="w-100 d-block" />
          </a>
          
          <ul className="footer_top_left pl-0">
            {/* Logo for larger screens */}
            <li>
              <a href="#" className="footer_logo d-lg-block d-sm-none d-md-none d-none">
                <img src={footerLogo} alt="Footer Logo" className="w-100 d-block" />
              </a>
            </li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <ul className="social-list pl-0">
            <li><a href="#"><img src={fbIcon} alt="Facebook" /></a></li>
            <li><a href="#"><img src={instaIcon} alt="Instagram" /></a></li>
            <li><a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a></li>
          </ul>
        </div>
        <p>&copy; 2024 Central Texas Fly Fishing</p>
      </div>
    </footer>
  );
};

export default Footer;
