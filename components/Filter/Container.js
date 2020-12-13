import React from "react";
import Nav from "./Nav";
import CollectionSetup from "./CollectionSetup";
import Config from "./Groups/Config";

const Container = () => {
  return (
    <>
      <section className="uk-grid uk-grid-match uk-grid-stack uk-child-width-expand@m uk-grid-small">
        <div className="uk-width-1-4@m">
          <Nav />
        </div>
        <div style={{ paddingLeft: "2px" }}>
          <CollectionSetup />
        </div>
        {/* <div className="uk-width-auto@m">
      </div> */}
      </section>
      <Config />
    </>
  );
};

export default Container;
