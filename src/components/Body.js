import React from "react";
import Header from "./Header";
import BigHero from "./BigHero";
import Contact from "./Contact";

class Body extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BigHero />
        <Contact />
      </div>
    );
  }
}

export default Body;