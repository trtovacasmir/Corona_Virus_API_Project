import React from "react";
import "./about.css";
import Amil from "./pictures/asmir1.png";
import Asmir from "./pictures/asmir2.png";
import Nikola from "./pictures/nikola.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {
  const amilSocialMedia = {
    facebook: "",
    twitter: "",
    github: "https://github.com/AmilKahrovic06",
    linkedin: "",
    instagram: "https://www.instagram.com/amil_k__/",
  };

  const asmirSocialMedia = {
    facebook: "",
    twitter: "",
    github: "https://github.com/trtovacasmir",
    linkedin: "https://www.linkedin.com/in/asmir-trtovac",
    instagram: "",
  };

  const nikolaSocialMedia = {
    facebook: "",
    twitter: "",
    github: "https://github.com/mrNikola",
    linkedin: "",
    instagram: "",
  };

  return (
    <div className="about_container">
      <h1>Our Corona Team</h1>
      <div class="about_cards">
        <div class="about_card">
          <img className="profile" src={Amil}></img>
          <h1 className="about_h1">Amil Kahrovic</h1>
          <div className="about_hover">
            <p className="about_p">
              Creative collaborator, vital to project success.
            </p>
            <div className="about_icons">
              <a href={amilSocialMedia.facebook}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href={amilSocialMedia.twitter}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={amilSocialMedia.github}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={amilSocialMedia.linkedin}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={amilSocialMedia.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        <div class="about_card">
          <img className="profile" src={Asmir}></img>
          <h1 className="about_h1">Asmir Trtovac</h1>
          <p className="about_p">
            Skilled designer and a valuable team player.
          </p>
          <div className="about_icons">
            <a href={asmirSocialMedia.facebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={asmirSocialMedia.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={asmirSocialMedia.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={asmirSocialMedia.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={asmirSocialMedia.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div class="about_card">
          <img className="profile" src={Nikola}></img>
          <h1 className="about_h1">Nikola Bozovic</h1>
          <p className="about_p">
            Supportive expert, essential to the team's harmony.
          </p>
          <div className="about_icons">
            <a href={nikolaSocialMedia.facebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={nikolaSocialMedia.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={nikolaSocialMedia.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={nikolaSocialMedia.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={nikolaSocialMedia.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
