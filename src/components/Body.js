import React from "react";
import Header from "./Header";
import BigHero from "./BigHero";

class Body extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BigHero />
      </div>
    );
  }
}

export default Body;