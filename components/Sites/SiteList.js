import React from "react";
import Link from "next/link";

const SiteList = ({ filterConfigs }) => {
  return (
    <>
      <div
        className="uk-background-secondary"
        uk-height-viewport="offset-top: true;offset-bottom: true">
        <ul className="uk-nav-default uk-nav-parent-icon uk-nav" uk-nav={1}>
          {filterConfigs.map(({ _id, site, filters }, i) => {
            const { name } = site;

            return (
              <React.Fragment key={_id + "config-" + i}>
                <li className="uk-background-secondary uk-padding-small uk-text-truncate">
                  <Link href={`/filter/${_id}`}>
                    <div className="uk-link-text" style={{ cursor: "pointer" }}>
                      <div
                        className="uk-grid-small uk-flex-left uk-grid uk-grid-stack"
                        uk-grid="">
                        <div>
                          <div className="uk-margin-small-left">
                            <span
                              className="uk-badge uk-label-success"
                              style={{
                                height: "10px",
                                minWidth: "10px",
                              }}></span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                              {name}
                            </div>
                            <div className="uk-text-small uk-text-muted">
                              {filters.length}{" "}
                              {filters.length > 1 ? "Filters" : "Filter"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="divider uk-margin-remove"></li>
              </React.Fragment>
            );
          })}
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
