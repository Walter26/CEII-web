import React from "react";
import Contact from "./Contact";
import Socials from "./Socials";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <Contact />
          <Socials />
        </div>
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
          >
            Pixel perfect
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
