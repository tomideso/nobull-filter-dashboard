import React from "react";

const steps = [
  "Select site",
  "Create Filter",
  "Add Filter elements",
  "Set-up in designer",
  "Test",
];

const Nav = ({ step, setstep }) => {
  return (
    <>
      <div className="uk-background-secondary">
        <ul className="uk-list uk-list-collapse">
          <li className=" uk-padding-small tm-background-black">
            <div className="uk-text-capitalize uk-text-large  uk-text-bold  white">
              Set-up filter
            </div>
          </li>
          {steps.map((val, i) => {
            const curr = i + 1;

            return (
              <React.Fragment key={i + "filter-step"}>
                <li
                  className="uk-background-secondary uk-padding-small"
                  onClick={() => setstep(curr)}>
                  <div className="uk-link-text" style={{ cursor: "pointer" }}>
                    <div className=" uk-flex uk-flex-between ">
                      <div className="">
                        <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                          {1 + i}. {val}
                        </div>
                      </div>
                      <div className="">
                        <ProgressIcon
                          status={
                            curr < step
                              ? "success"
                              : step == curr
                              ? "active"
                              : "idle"
                          }
                        />
                      </div>
                    </div>
                  </div>
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
