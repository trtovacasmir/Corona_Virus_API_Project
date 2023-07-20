import React from "react";
import './about.css'
import Profile from './asmir.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
  return (
    <div className="about_container">
      <h1>Our Corona Team</h1>
    <div class="about_cards">
        <div class="about_card">
          <img className="profile" src={Profile}></img>
            <h1>Asmir Trtovac</h1>
            <div className="about_hover">
            <p className="about_p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, libero?</p>
            <div className="about_icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            </div>
            </div>
        </div>

        <div class="about_card">
          <img className="profile" src={Profile}></img>
            <h1>Amil Kahrovic</h1>
            <p className="about_p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, libero?</p>
            <div className="about_icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            </div>
        </div>

        <div class="about_card">
          <img className="profile" src={Profile}></img>
            <h1>Nikola Bozovic</h1>
            <p className="about_p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, libero?</p>
            <div className="about_icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            </div>
        </div>
        
      </div>
    </div>
  )
};

export default AboutUs;
