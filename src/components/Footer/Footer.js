import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    <div className="icon">
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faTwitter} />
    </div>
    
    <div className="Footer">
      <ul className="ul_footer">
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/covid" exact>
            Covid Stats
          </NavLink>
        </li>
        <li>
          <NavLink to="/country" exact>
            Country Stats
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact>
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
    <h4 className="footer_h5"> ©Covid 19 Corporation NIT Team Two</h4>
    </>
  );
};

export default Footer;
