import React, { useContext } from "react";
// import Select from "react-select";

import dynamic from "next/dynamic";
import { CollectionContext } from "components/context/Collection";
import DropConfirmation from "components/Filter/Elements/DropConfirmation";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

const CollectionSetup = ({
  addGroup,
  groups,
  setActiveGroup,
  setActiveGroupIdx,
  saveConfiguration,
  sites,
  sitesChangeHandler,
  selectedSite,
  collectionChangeHandler,
}) => {
  const parseOptions = () => {
    return sites.reduce((curr, val) => {
      const { name: label, previewUrl, shortName, _id } = val;

      curr.push({ label, value: _id });
      return curr;
    }, []);
  };

  const options = parseOptions();

  const {
    isLoading,
    collections = [],
    selectedCollection,
    setShowForm,
    deleteGroup,
  } = useContext(CollectionContext);

  const parseCollections = () => {
    return collections.reduce((curr, val) => {
      const { name: label, slug, singularName, _id } = val;

      curr.push({ label, value: _id });

      return curr;
    }, []);
  };

  const collectionOptions = parseCollections();

  return (
    <>
      <div
        className="uk-background-secondary"
        uk-height-viewport="offset-top: true;offset-bottom: true">
        <ul className="uk-list uk-list-collapse">
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text">
              <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                Select Webflow site
              </div>
              <Select
                name="sites"
                value={options.find(({ value }) => value == selectedSite)}
                // onFocus={loadService}
                autoload={false}
                options={options}
                onChange={sitesChangeHandler}
                id="sites-dropdown"
                className="bg-none uk-text-bold"
              />
            </div>
          </li>

          <li className="divider "></li>
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text">
              <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                Select Webflow Collection
              </div>
              <Select
                name="collections"
                value={collectionOptions?.find(
                  ({ value }) => value == selectedCollection
                )}
                autoload={false}
                isLoading={isLoading}
                options={collectionOptions}
                onChange={collectionChangeHandler}
                className="bg-none uk-text-bold"
              />
            </div>
          </li>

          {groups?.length ? (
            <>
              <li className="divider "></li>

              <li className="uk-background-secondary uk-padding-small">
                <div className="uk-text-bold white">Add on</div>
                <div className="uk-margin-small">
                  <textarea
                    className="uk-textarea"
                    rows="5"
                    placeholder=""
                    style={{ resize: "none" }}></textarea>
                </div>
              </li>
            </>
          ) : null}

          <li className="divider "></li>

          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text">
              <strong className="uk-text-capitalize uk-text-truncate tm-text-white uk-margin-small-right">
                Filter Groups
              </strong>

              <a
                className="uk-link-reset uk-text-bold white uk-button uk-button-primary uk-button-small "
                onClick={addGroup}
                uk-toggle="#offcanvas-usage">
                <span
                  className="uk-icon"
                  uk-icon="icon: plus; ratio: .9"></span>
                <span> Add </span>
              </a>
            </div>
          </li>

          {groups.map(({ name, element }, idx) => {
            return (
              <React.Fragment key={`group-${idx}`}>
                <li className="uk-background-secondary uk-padding-small">
                  <div
                    className="uk-grid-small uk-child-width-expand  uk-flex uk-flex-middle uk-flex-between"
                    uk-grid="">
                    <strong
                      type="button"
                      className="uk-text-capitalize tm-cursor-pointer uk-text-truncate tm-text-white uk-margin-small-right"
                      uk-toggle="#offcanvas-usage"
                      onClick={() => {
                        setActiveGroup(groups[idx]);
                        setShowForm(true);
                        setActiveGroupIdx(idx);
                      }}>
                      {name || "Not specified"}
                    </strong>
                    <div className="font-icon uk-text-middle uk-text-right uk-width-auto">
                      <span
                        className="fa-stack fa-lg uk-button uk-button-link"
                        type="button">
                        <i className="fa fa-circle fa-lg fa-stack-1x uk-text-danger "></i>
                        <i className="fa fa-trash fa-stack-1x fa-inverse font-18"></i>
                      </span>
                      <DropConfirmation initDelete={() => deleteGroup(idx)} />
                    </div>
                  </div>
                </li>
                <li className="divider "></li>
              </React.Fragment>
            );
          })}
        </ul>

        <div className="tm-text-white uk-padding-small">
          <div
            className="uk-text-lead tm-text-white"
            style={{ color: "white" }}>
            Publish and test
          </div>
          <div className="">
            When data attributes are added to Webflow site,
          </div>
          <div className="">publish your site and push the button</div>

          <div>
            <button
              onClick={saveConfiguration}
              className="uk-button uk-button-primary">
              save
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .divider {
          border-top: 2px solid #000;
        }

        .white {
          color: white !important;
        }

        .bg-none,
        .bg-none > div {
          background: transparent !important;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default CollectionSetup;
