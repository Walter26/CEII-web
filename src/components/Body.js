import React from "react";
import Header from "./Header";
import BigHero from "./BigHero";
import Footer from "./Footer";

class Body extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BigHero />
        <Footer />
      </div>
    );
  }
}

export default Body;