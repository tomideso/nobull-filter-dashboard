import React from "react";
import Tabs from "./Tabs";

const Search = () => {
  return (
    <section className="uk-panel uk-width-4-5@m uk-margin-auto">
      <div className="uk-padding bg-fade tm-text-white">
        <h3 className="tm-text-white">
          Tele-health solution to support{" "}
          <span className="uk-text-bold">COVID 19</span> Pandemic
        </h3>
        <div>Search Tele-health Medical Service</div>
        <Tabs />
        <div>
          <form className="uk-form-stacked">
            <div
              className="uk-grid-collapse uk-flex-center uk-child-width-auto@m"
              uk-grid="">
              <div className="uk-inline uk-form-controls uk-width-expand@m">
                <span className="uk-form-icon" uk-icon="icon: search"></span>
                <input
                  className="uk-input uk-form-large uk-width-1-1@m"
                  name="search"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div>
                <button className="uk-button uk-button-danger uk-width-1-1 uk-button-large uk-text-capitalize">
                  Search
                </button>
              </div>
              <div className="uk-width-1-1">
                <div className="uk-grid-small" uk-grid="">
                  <span>DATE</span>
                  <span>Today</span>
                  <span>Next 7 days</span>
                  <span>
                    22/03/20 <i uk-icon="icon: calendar;"></i>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .bg-white {
          background-color: #fff !important;
        }

        .bg-fade {
          background-color: rgba(11, 39, 90, 0.68);
        }
        
        }
      `}</style>
    </section>
  );
};

export default Search;
