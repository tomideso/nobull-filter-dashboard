import React from "react";
import RegisterForm from "./RegisterForm";
import classes from "./Register.module.css";
import chart from "./asset/Chart.png";
import banner from "./asset/Banner.jpg";
import { connect } from "react-redux";

function RegisterGrid({ regRedirectPath, regData }) {
  return (
    <section>
      <section
        className="uk-section tm-height-small uk-background-cover uk-background-center-center"
        style={{ backgroundImage: `url(${banner})` }}></section>
      <section
        className={[
          "uk-container uk-position-relative uk-position-z-index",
          classes.MarginTop,
        ].join(" ")}>
        <div className="uk-grid-large uk-grid-column-large uk-flex-between uk-child-width-expand@m uk-grid">
          {/* signup form column */}
          <div className="uk-width-1-3@m">
            <RegisterForm {...regData} />
          </div>

          <div>
            <div>
              <div className="uk-visible@m">
                <h5 className="tm-text-white uk-margin-top">
                  Tele-health solution to support{" "}
                  <span className="uk-text-bold">COVID 19 </span>Pandemic
                </h5>
                <div className="uk-grid uk-grid-small">
                  <div>
                    <span className="uk-label tm-text-smaller uk-text-primary uk-background-default">
                      General Practice
                    </span>
                  </div>
                  <div>
                    <span className="uk-label tm-text-smaller uk-text-primary uk-background-default">
                      Specialist Clinic
                    </span>
                  </div>
                  <div>
                    <span className="uk-label tm-text-smaller uk-text-primary uk-background-default">
                      Hospitals
                    </span>
                  </div>
                  <div>
                    <span className="uk-label tm-text-smaller uk-text-primary uk-background-default">
                      Allied Health
                    </span>
                  </div>
                  <div>
                    <span className="uk-label tm-text-smaller uk-text-primary uk-background-default">
                      Fever Clinics
                    </span>
                  </div>
                </div>
              </div>

              <div className="uk-hidden@m">
                <h5 className="uk-text-primary uk-margin-top">
                  Tele-health solution to support{" "}
                  <span className="uk-text-bold">COVID 19 </span>Pandemic
                </h5>
                <div className="uk-grid uk-grid-small">
                  <div>
                    <span className="uk-label tm-text-smaller uk-background-primary">
                      General Practice
                    </span>
                  </div>
                  <div>
                    <span className="uk-label tm-text-smaller uk-background-primary">
                      Specialist Clinic
                    </span>
                  </div>
                  <div>
                    <span className="uk-label tm-text-smaller uk-background-primary">
                      Hospistals
                    </span>
                  </div>
                  <div>
                    <span className="uk-label tm-text-smaller uk-background-primary">
                      Allied Health
                    </span>
                  </div>
                  <div>
                    <span className="uk-label tm-text-smaller uk-background-primary">
                      Fever Clinics
                    </span>
                  </div>
                </div>
              </div>

              <div className="uk-margin-large-top">
                <p>
                  COVID 19 is spreading rapidly and is effecting the way we do
                  our consultations, This is the time health workforce is needed
                  more than ever.
                </p>
                <p>
                  With more doctors getting infection with COVID 19 there is
                  need ofr ongoing care of patients with other medical
                  conditions. There is lot of fear in the patients to visit
                  medical practice and at the same time there is fear among
                  doctors because of COVID 19.
                </p>
                <p className="uk-text-bold">
                  Onthe mend is a platform that simplifies the process of
                  tele-health
                </p>
                <p>
                  Signup today and continue your medical practise from hom,
                  preventing further spread of COVID 19.
                </p>
              </div>

              <div className="uk-grid uk-grid-small">
                <div>
                  <span
                    className={[
                      "uk-label tm-outline-primary tm-text-smaller uk-text-primary",
                      classes.signpost,
                    ].join(" ")}>
                    Register
                  </span>
                </div>
                <div>
                  <span
                    className={[
                      "uk-label tm-outline-primary tm-text-smaller uk-text-primary",
                      classes.signpost,
                    ].join(" ")}>
                    Add Availability
                  </span>
                </div>
                <div>
                  <span
                    className={[
                      "uk-label tm-outline-primary tm-text-smaller uk-text-primary",
                      classes.signpost,
                    ].join(" ")}>
                    Patient Search & Book
                  </span>
                </div>
                <div>
                  <span
                    className={[
                      "uk-label tm-outline-primary tm-text-smaller uk-text-primary",
                      classes.signpost,
                    ].join(" ")}>
                    Consult Tele-Health
                  </span>
                </div>
              </div>

              <div className="uk-grid uk-grid-small uk-child-width-1-3@m">
                <div>
                  <div>
                    <div>
                      <i
                        className="fa fa-plus-square uk-text-primary"
                        aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        Work from home
                      </span>
                    </div>
                    <div className="uk-margin-small">
                      <i
                        className="fa fa-plus-square uk-text-primary"
                        aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        Appointment booking
                      </span>
                    </div>
                    <div>
                      <i
                        className="fa fa-plus-square uk-text-primary"
                        aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        Video-call from your desktop app
                      </span>
                    </div>
                    <div className="uk-margin-small">
                      <i
                        className="fa fa-plus-square uk-text-primary"
                        aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        Medical notes
                      </span>
                    </div>
                    <div>
                      <i
                        className="fa fa-plus-square uk-text-primary"
                        aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        Patient app
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <div>
                      <i
                        className="fa fa-plus-square uk-text-primary"
                        aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        Write prescription
                      </span>
                    </div>
                    <div className="uk-margin-small">
                      <i
                        className="fa fa-plus-square uk-text-primary"
                        aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        One click pathology referal
                      </span>
                    </div>
                    <div>
                      <i
                        className="fa fa-plus-square uk-text-primary"
                        aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        One click clinic radiology referal
                      </span>
                    </div>
                    <div className="uk-margin-small">
                      <i
                        className="fa fa-plus-square uk-text-primary"
                        aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        One click Medical certificates
                      </span>
                    </div>
                    <div>
                      <i
                        className="fa fa-plus-square uk-text-primary"
                        aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        One click referal.
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <img src={chart} alt="chart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="uk-container">
        For any help or guidance please e-mail us{" "}
        <a className="uk-link" href="mailto:support@onthemend.com.au">
          support@onthemend.com.au
        </a>
      </p>
    </section>
  );
}

export default connect((state) => state.reg)(RegisterGrid);
