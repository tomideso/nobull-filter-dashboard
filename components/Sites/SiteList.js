import React from "react";

const SiteList = () => {
  return (
    <>
      <div>
        <ul className="uk-nav-default uk-nav-parent-icon uk-nav" uk-nav={1}>
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text" style={{ cursor: "pointer" }}>
              <div
                className="uk-grid-small uk-flex-left uk-grid uk-grid-stack"
                uk-grid="">
                <div>
                  <div className="uk-margin-small-left">
                    <span
                      className="uk-badge uk-label-success"
                      style={{ height: "10px", minWidth: "10px" }}></span>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                      Finsweet 2020 - Videos
                    </div>
                    <div className="uk-text-small uk-text-muted">
                      finsweet.com - Portfolio
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="divider uk-margin-remove"></li>
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text" style={{ cursor: "pointer" }}>
              <div
                className="uk-grid-small uk-flex-left uk-grid uk-grid-stack"
                uk-grid="">
                <div>
                  <div className="uk-margin-small-left">
                    <span
                      className="uk-badge uk-label-success"
                      style={{ height: "10px", minWidth: "10px" }}></span>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                      Nobbull Promo 2020 - Edu Videos
                    </div>
                    <div className="uk-text-small uk-text-muted">
                      wf-awards.com - Winners
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="divider uk-margin-remove"></li>
        </ul>
      </div>

      <style jsx>{`
        .divider {
          border-top: 2px solid #000;
        }
      `}</style>
    </>
  );
};

export default SiteList;
