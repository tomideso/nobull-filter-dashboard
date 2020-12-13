import React from "react";

const Practioners = () => {
  return (
    <>
      <div className="uk-text-bold uk-margin-top">Our Medical Practioners</div>

      <div className="uk-card uk-card-default uk-width-3-5@m">
        <div
          className="uk-grid-small uk-padding-small uk-padding-remove-left"
          uk-grid="">
          <div className="uk-width-expand">
            <div>
              <div className="uk-text-uppercase uk-padding-small uk-text-small">
                General Practioners
              </div>
              <div className="uk-card-body uk-text-small uk-padding-small uk-padding-remove-top">
                <div className="uk-text-primary uk-text-bold">
                  Dr Dushyant Singh
                </div>
                <div className="">MBBS,RACGP</div>
                <div className="">
                  <i
                    href=""
                    className="uk-icon-link uk-text-primary"
                    uk-icon="location"></i>{" "}
                  19-21 Commercial Drive, Springfield, Qld 4300
                </div>
              </div>
            </div>
          </div>
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="120"
              height="120"
              data-src="/Image/Logo.svg"
              uk-img=""
            />
          </div>
        </div>

        <div className="uk-card-footer uk-background-muted uk-padding-small">
          <div
            className="uk-grid-small uk-child-width-auto@m uk-flex-between"
            uk-grid="">
            <div>
              <label href="#" className="">
                <span>Next Available: </span>
                <span className="uk-label uk-label-warning uk-text-capitalize">
                  24/March, 11:15Am Onwards
                </span>
              </label>
            </div>
            <div>
              <a className="uk-button uk-text-capitalize uk-text-small uk-button-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Practioners;
