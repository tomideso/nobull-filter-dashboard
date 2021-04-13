import React, { useState } from "react";
import SiteList from "./SiteList";
import FilterContainer from "components/Filter/FilterForm/FilterContainer";
import Container from "components/Filter/Container";

const SiteContainer = ({ filterConfigs, id }) => {
  const config = filterConfigs.find(({ _id }) => _id == id);

  console.log(config);

  return (
    <section className="uk-grid uk-grid-match uk-grid-stack uk-child-width-expand@m uk-grid-small">
      <div className="uk-width-1-4@m">
        <SiteList filterConfigs={filterConfigs} />
      </div>
      <div style={{ paddingLeft: "2px" }}>
        <Container configuration={config} />
      </div>
    </section>
  );
};

export default SiteContainer;
