import React from "react";
import Link from "next/link";
import SearchSites from "./SearchSites";

const NavBar = (props) => {
  return (
    <header className="height uk-sticky" uk-sticky="">
      <nav
        className="height uk-flex uk-flex-middle uk-card tm-background-black zIndex uk-navbar"
        uk-navbar="">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav uk-margin-left">
            <li className="uk-text-large">
              <Link href="/">
                <a className="uk-text-bold tm-text-white uk-text-small uk-text-capitalize uk-text-middle">
                  <span className="uk-text-bold tm-text-white">Nobull </span>
                  <span className="logo_padding uk-label-warning uk-margin-small-left uk-text-middle">
                    <span className="logo_padding uk-button-danger ">
                      Filter
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="button-padding">
              <div className="search_padding">
                <SearchSites />
              </div>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav uk-iconnav">
            <li className="uk-text-large button_padding">
              <Link href="/login">
                <div>
                  <a
                    className="uk-icon-button uk-label-muted uk-icon"
                    uk-icon="user"></a>
                </div>
              </Link>
            </li>
            <li className="uk-text-large button_padding">
              <></>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>
        {`
          .height {
            height: 60px;
          }

          .search_padding {
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            min-height: 80px;
          }

          .button_padding {
            padding: 10px;
          }

          .logo_padding {
            padding: 8px 6px;
          }

          .logo_padding > span {
            padding: 2px 4px;
          }

          .signup_padding {
            padding-left: 5px;
            padding-right: 10px;
          }

          .signup_dropdown {
            width: 220px;
          }

          .zIndex {
            z-index: 100;
          }
        `}
      </style>
    </header>
  );
};

export default NavBar;
