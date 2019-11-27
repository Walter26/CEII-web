import React from "react";

import fb from '../img/fb.png';
import insta from '../img/ins.png';
import slack from '../img/slack.png';

var actualYear = new Date().getFullYear();

class Footer extends React.Component {
  render(){
    return(
      <footer className="footer">
        <h2>Nuestras redes sociales</h2>
        <div className="socials">
          <ul>
            <li>
              <a href="https://www.facebook.com/CEII.UCA/"><img src={fb} alt="Facebook"/></a>
            </li>
            <li>
              <a href="https://www.instagram.com/ceii.uca/"><img src={insta} alt="Instagram"/></a>
            </li>
            <li>
              <a href="https://bit.ly/2QTJLqh"><img src={slack} alt="Slack"/></a>
            </li>
          </ul>
        </div>
          <div className="footer-text">
            <h3 className="copy">Copyright ©CEII {actualYear}, todos los derechos reservados</h3>
            <div className="flat">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </div>
      </footer>
    )
  }
}

export default Footer;
