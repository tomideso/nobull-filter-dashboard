import React from "react";
import Banner from "./Banner";
import ClinicType from "./ClinicType";
import About from "./About";
import OpeningHours from "./OpeningHours";
import Account from "./Account";

const Profile = () => {
  return (
    <section>
      <div className="uk-text-bold">Spring Field Medical Center</div>
      <div>
        Forest Fair Shopping Villary Shop 3/120 Woogaroo street Forest Lake, QLD
        4078
      </div>
      <a
        href="wwww.springfieldmedical.com.au"
        target="_blank"
        className="uk-link">
        www.springieldmedical.com.au
      </a>
      <div>
        <a href="tel:0754545454" className="uk-link">
          0754545454
        </a>
      </div>

      <Banner />
      <ClinicType />
      <About />
      <OpeningHours />
      <Account />

      <p>
        <button className="uk-button-danger uk-text-capitalize uk-button">
          Delete Account
        </button>
      </p>
    </section>
  );
};

export default Profile;
