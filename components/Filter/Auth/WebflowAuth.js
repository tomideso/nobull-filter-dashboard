import React, { useContext } from "react";
import { CollectionContext } from "components/context/Collection";
import dynamic from "next/dynamic";
// import { useSiteDomains } from "hooks/useCollections";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

const WebflowAuth = ({ sitesChangeHandler, sites }) => {
  const { nextStep, selectedSite } = useContext(CollectionContext);

  // const { data: domains, error, status, isLoading } = useSiteDomains(
  //   selectedSite
  // );

  // console.log({ domains });

  const parseOptions = () => {
    return sites.reduce((curr, val) => {
      const { name: label, previewUrl, shortName, _id } = val;

      curr.push({ label, value: _id });
      return curr;
    }, []);
  };

  const options = parseOptions();

  //get sites domain
  return (
    <>
      <div
        className="uk-background-secondary"
        uk-height-viewport="offset-top: true;offset-bottom: true">
        <ul className="uk-list uk-list-collapse">
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text">
              <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                Select Webflow Auth
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
                Select Webflow site
              </div>
              <div className="uk-inline uk-width-1-1">
                <span
                  className="uk-form-icon uk-icon"
                  uk-icon="icon: search"
                  uk-tooltip="Search for website"></span>
                <input
                  className={["uk-input uk-width-1-1"].join(" ")}
                  type="text"
                  name={`webflow-site`}
                />
              </div>
            </div>
          </li>
          <li className="divider "></li>
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-grid-small uk-child-width-auto@m" uk-grid="">
              {/* <!--first column--> */}
              {sites.map(({ _id, previewUrl, shortName }, i) => {
                return (
                  <div key={_id + shortName}>
                    <div className="uk-card uk-card-default uk-card-large">
                      <div
                        onClick={nextStep}
                        className="webflow-card uk-card-body uk-text-center uk-text-bold uk-background-center-center uk-background-cover tm-cursor-pointer"
                        style={{
                          backgroundImage: `url(${previewUrl})`,
                        }}>
                        <p>Select it</p>
                      </div>
                      <div className="uk-padding-small uk-text-bold">
                        <div>{shortName}</div>
                        <div>
                          <a href="http://tomide-nb-filter-testing.webflow.io">
                            tomide-nb-filter-testing.webflow.io
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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

        .webflow-card:hover {
          background: rgb(30, 135, 240) !important;
        }

        .webflow-card > p {
          visibility: hidden;
        }

        .webflow-card:hover > p {
          visibility: visible;
          color: white;
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

export default WebflowAuth;
