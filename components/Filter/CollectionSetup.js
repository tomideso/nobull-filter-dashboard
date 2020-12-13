import React from "react";

const CollectionSetup = () => {
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
              <select className="uk-select bg-none uk-text-bold">
                <option>Finsweet.com</option>
                <option>cmslibraary</option>
              </select>
            </div>
          </li>

          <li className="divider "></li>
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text">
              <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                Select Webflow Collection
              </div>
              <select className="uk-select bg-none uk-text-bold">
                <option>Porfolio</option>
                <option>cmslibraary</option>
              </select>
            </div>
          </li>
          <li className="divider "></li>

          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text">
              <strong className="uk-text-capitalize uk-text-truncate tm-text-white uk-margin-small-right">
                Filter Groups
              </strong>

              <a
                className="uk-link-reset uk-text-bold white uk-button uk-button-primary uk-button-small "
                uk-toggle="#offcanvas-usage">
                <span
                  className="uk-icon"
                  uk-icon="icon: plus; ratio: .9"></span>
                <span> Add </span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .divider {
          border-top: 2px solid #000;
        }

        .white {
          color: white !important;
        }

        .bg-none {
          background: transparent;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default CollectionSetup;
