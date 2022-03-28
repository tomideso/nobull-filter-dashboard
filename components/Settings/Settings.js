import React from "react";
import Link from "next/link";

const Settings = ({ value, children }) => {
  return (
    <section className="uk-padding uk-width-4-5@m">
      <div className="uk-margin-small Group_border">
        <div className="Group">
          <input
            type="radio"
            id="male"
            name="settings-tab"
            value="0"
            style={{ display: "none" }}
            checked={value == 0}
            readOnly
          />
          <label htmlFor="male">
            <Link
              href="/settings/[tab]?tab=practice-profile"
              as="/settings/practice-profile">
              {/* <Link href="#practice-profile"> */}
              <a
                // href="#practice-profile"
                className="uk-button uk-text-capitalize uk-button-default">
                Practice Profile
              </a>
            </Link>
          </label>

          <input
            type="radio"
            id="sub"
            name="settings-tab"
            value="1"
            style={{ display: "none" }}
            checked={value == 1}
            readOnly
          />
          <label htmlFor="sub">
            <Link
              href="/settings/[tab]?tab=subscription"
              as="/settings/subscription">
              <a
                // href="#subscription"
                className="uk-button uk-text-capitalize uk-button-default">
                Subscription
              </a>
            </Link>
          </label>

          <input
            type="radio"
            id="team"
            name="settings-tab"
            value="2"
            style={{ display: "none" }}
            checked={value == 2}
            readOnly
          />
          <label htmlFor="team">
            <Link href="/settings/[tab]?tab=team" as="/settings/team">
              <a
                // href="#team"
                className="uk-button uk-text-capitalize uk-button-default">
                Team
              </a>
            </Link>
          </label>

          <Link href="/hospital/preview" replace>
            <a
              className="uk-button uk-text-capitalize uk-button-default"
              style={{ backgroundColor: "#fff5d5" }}>
              <i className="fa fa-eye" aria-hidden="true"></i>&nbsp; Preview
              Page
            </a>
          </Link>
        </div>
        <hr className="uk-margin-remove" />
      </div>

      {children}

      <style jsx>{`
        .Group a {
          padding: 5px 10px;
        }

        .Group_border hr {
          margin-top: -1px;
        }

        .Group a:last-child {
          backgroud-color: #fff5d5;
          color: #000;
        }

        .Group input[type="radio"]:not(:checked) + label > a {
          background: #f1f1f1 !important;
          border-color: #d0d0d0;
        }
      `}</style>
    </section>
  );
};

export default Settings;
