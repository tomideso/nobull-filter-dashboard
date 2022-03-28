import React from "react";
import Link from "next/link";

const Tabs = ({ value, children }) => {
  return (
    <section className="uk-width-4-5@m">
      <div className="uk-margin-small-top">
        <div
          className="Grid-Padding Group uk-grid-small uk-grid-child-width-auto@m"
          uk-grid="">
          <div>
            <input
              type="radio"
              id="male"
              name="settings-tab"
              value="0"
              style={{ display: "none" }}
            />
            <label htmlFor="male">
              <a
                // href="#practice-profile"
                className="uk-button uk-text-capitalize uk-button-primary">
                General Practioner
              </a>
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="hospital-emergency"
              name="settings-tab"
              value="1"
              style={{ display: "none" }}
            />
            <label htmlFor="hospital-emergency">
              <a
                // href="#subscription"
                className="uk-button uk-text-capitalize uk-button-primary">
                Hospital Emergency
              </a>
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="covid"
              name="settings-tab"
              value="1"
              style={{ display: "none" }}
            />
            <label htmlFor="covid">
              <a
                // href="#subscription"
                className="uk-button uk-text-capitalize uk-button-primary">
                COVID 19 Clinic
              </a>
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="team"
              name="settings-tab"
              value="2"
              style={{ display: "none" }}
            />
            <label htmlFor="team">
              <a
                // href="#team"
                className="uk-button uk-text-capitalize uk-button-primary">
                Specialist
              </a>
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="Allied"
              name="settings-tab"
              value="2"
              style={{ display: "none" }}
            />
            <label htmlFor="Allied">
              <a
                // href="#team"
                className="uk-button uk-text-capitalize uk-button-primary">
                Allied health
              </a>
            </label>
          </div>
        </div>
      </div>

      {children}

      <style jsx>{`
        .Group a {
          padding: 0px 15px;
          border-radius: 8px 8px 0px 0px;
        }

        .Group a:not(:first-child) {
        }

        .Group input[type="radio"]:checked + label > a {
          background: rgb(240, 80, 110) !important;
        }

        @media (min-width: 960px) {
          .Grid-Padding > *:not(:first-child) {
            padding-left: 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default Tabs;
