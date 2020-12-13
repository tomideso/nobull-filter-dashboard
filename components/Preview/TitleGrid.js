import React from "react";

const TitleGrid = () => {
  return (
    <div className="uk-grid-small uk-child-width-1-3@m" uk-grid="">
      <div>
        <div>
          <div className="uk-grid-small uk-flex-middle" uk-grid="">
            <div className="uk-width-auto">
              <img
                className="banner"
                data-src={"/Image/Logo.svg"}
                width="40"
                height="40"
                alt=""
                uk-img=""
              />

              {/* <img class="uk-border-circle" width="40" height="40" src="/Image/Logo.svg" /> */}
            </div>
            <div className="uk-width-expand">
              <div className="uk-text-bold uk-text-emphasis">
                Spring Field Medical Center
              </div>
              <a
                href="http://www.springfieldmedical.com.au"
                target="_blank"
                className="uk-text-small uk-">
                www.springfieldmedical.com.au
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <span
            href=""
            className="uk-icon-button uk-text-primary"
            uk-icon="receiver"></span>
          <span> 07 5454 5454</span>
        </div>
      </div>

      <div>
        <div>
          <button className="uk-button uk-button-primary uk-button-small uk-text-capitalize">
            General Practice
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleGrid;
