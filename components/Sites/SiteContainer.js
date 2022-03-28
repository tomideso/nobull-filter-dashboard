import React, { useEffect } from "react";
import SiteList from "./SiteList";
import Container from "components/Filter/Container";
import { useRouter } from "next/router";
import Spinner from "@/custom components/Spinner/Spinner";

const SiteContainer = ({ filterConfigs, id }) => {
  const config = filterConfigs.find(({ _id }) => _id == id);
  const { asPath, push } = useRouter();
  useEffect(() => {
    if (!config) {
      push("/filter/new");
    }
  }, []);
  return config ? (
    <section className="uk-grid uk-grid-match uk-grid-stack uk-child-width-expand@m uk-grid-small">
      <div className="uk-width-1-4@m">
        <SiteList filterConfigs={filterConfigs} />
      </div>
      <div style={{ paddingLeft: "2px" }}>
        <Container configuration={config} />
      </div>
    </section>
  ) : (
    <Spinner />
  );
};

export default SiteContainer;
