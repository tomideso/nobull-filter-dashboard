import React from "react";
import Availability from "./Availability";
import About from "./About";

const RightColumn = () => {
  return (
    <div className="uk-width-4-5@m">
      <About />
      <Availability />
      <Availability />
      <Availability />
    </div>
  );
};

export default RightColumn;
