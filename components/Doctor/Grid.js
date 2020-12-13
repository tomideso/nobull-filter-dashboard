import React from "react";
import RightColumn from "./Right/RightColumn";
import LeftColumn from "./Left/LeftColumn";

const Grid = () => {
  return (
    <section className="uk-container uk-padding-small">
      <div className="uk-grid uk-child-width-auto@m" uk-grid="">
        <div>
          <LeftColumn />
        </div>
        <div className="uk-width-3-5@m">
          <RightColumn />
        </div>
      </div>
    </section>
  );
};

export default Grid;
