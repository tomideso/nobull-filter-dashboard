import React from "react";

const Nav = () => {
  return (
    <>
      <div className="uk-background-secondary">
        <ul className="uk-list uk-list-collapse">
          <li className=" uk-padding-small tm-background-black">
            <div className="uk-text-capitalize uk-text-large  uk-text-bold  white">
              Set-up filter
            </div>
          </li>
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text" style={{ cursor: "pointer" }}>
              <div className=" uk-flex uk-flex-between ">
                <div className="">
                  <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                    1. Select Collection
                  </div>
                </div>
                <div className="">
                  <ProgressIcon status="success" />
                </div>
              </div>
            </div>
          </li>

          <li className="divider uk-margin-remove"></li>
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text" style={{ cursor: "pointer" }}>
              <div className=" uk-flex uk-flex-between ">
                <div className="uk-width-expand@m">
                  <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white uk-text-middle">
                    2. Create Filter
                  </div>
                </div>
                <div>
                  <ProgressIcon status="active" />
                </div>
              </div>
            </div>
          </li>
          <li className="divider uk-margin-remove"></li>
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text" style={{ cursor: "pointer" }}>
              <div className=" uk-flex uk-flex-between ">
                <div className="uk-width-expand@m">
                  <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white uk-text-medium">
                    3. Publish and test
                  </div>
                </div>
                <div>
                  <ProgressIcon />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .divider {
          border-top: 2px solid #000;
        }

        .white {
          color: white;
        }
      `}</style>
    </>
  );
};

export default Nav;

const ProgressIcon = ({ status = "idle" }) => {
  return (
    <>
      <div className="font-icon">
        {status == "success" && (
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-1x  fa-inverse"></i>
            <i className="fa fa-check-circle fa-stack-1x fa-lg uk-text-center uk-text-success "></i>
          </span>
        )}
        {status == "active" && (
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-1x  fa-inverse"></i>
            <i className="fa fa-arrow-circle-right fa-stack-1x fa-lg uk-text-center uk-text-primary "></i>
          </span>
        )}
        {status == "idle" && (
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-1x fa-lg "></i>
          </span>
        )}
      </div>
      <style jsx>{`
        .font-icon {
          height: 1em;
          line-height: 1em;
        }

        .font-icon > span {
          height: 1em;
          line-height: 1em;
        }
      `}</style>
    </>
  );
};
