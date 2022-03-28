import React, { useEffect } from "react";
import classes from "./Login.module.css";
import { SSO_URL } from "../constant";
import { useSession, signIn, signOut } from "next-auth/client";

function LoginContainer() {
  const [session, loading] = useSession();
  console.log(session, loading);

  return (
    <section>
      <section className="uk-section uk-height-small uk-section-primary"></section>
      <section
        className={[
          "uk-container uk-position-relative uk-position-z-index",
          classes.MarginTop,
        ].join(" ")}
      >
        <div className="uk-grid-small uk-flex-around uk-grid">
          <div>
            <div>
              <h3 className="tm-text-white">Welcome to Nobull filter</h3>
              <div className="uk-margin-large-top">
                <dl className="uk-description-list">
                  <dt className="uk-text-primary">Dynamic Filter</dt>
                  <dd>Perform dynamic filtering with your collection items</dd>
                  <dt className="uk-text-primary">Complex filter Trigger</dt>
                  <dd>Customize your filter element in mind blowing ways</dd>
                </dl>
              </div>
            </div>
          </div>

          {/* login form column */}
          <div className="uk-width-1-3@s">
            <div className="uk-box-shadow-small uk-padding-small uk-background-default uk-border-rounded">
              <h4 className="">Access Your Account</h4>
              <a
                href={`${SSO_URL}?redirect_url=localhost:3000/auth`}
                className="uk-button uk-button-primary uk-width-1-1"
              >
                Signin
              </a>

              <div className="uk-margin">
                <a
                  href={`${SSO_URL}?redirect_url=localhost:3000`}
                  className="uk-button uk-button-secondary uk-width-1-1"
                >
                  Signup
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="uk-container">
        For any help or guidance please e-mail us{" "}
        <a className="uk-link" href="mailto:support@finsweet.com">
          support@nobull.com
        </a>
      </p>
    </section>
  );
}

export default LoginContainer;
