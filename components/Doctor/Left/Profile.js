import React from "react";

const Profile = () => {
  return (
    <>
      <div>
        <div className="uk-text-primary tm-outline-muted uk-flex uk-flex-between uk-background-muted tm-padding-small">
          <span>Dr Dushyant Singh</span>
          <span>
            <span uk-icon="icon: chevron-down;"></span>
          </span>
        </div>
        <div className="uk-margin-top">
          <div
            className="uk-grid-small uk-flex-middle uk-flex uk-grid-match uk-child-width-1-2@m"
            uk-grid="">
            <div>
              <div
                className="banner tm-outline-muted uk-background-contain uk-background-top-center"
                data-src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQf05EXfntnOa2j5uB6MvFQEx9CYBFyvw2l2dcYVUozF5P1GthZg&s"
                }
                alt="Dr Dushyant Singh"
                uk-img=""
              />
            </div>
            <div>
              <table
                className={`
                    uk-table tm-outline-muted
                    uk-text-small banner
                    uk-table-responsive
                    uk-table-small uk-table-divider
                `}>
                <tbody className="uk-text-small">
                  <tr>
                    <td className="uk-padding-small">General Practioner</td>
                  </tr>
                  <tr>
                    <td className="uk-padding-small">MBBS,RACGP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .banner {
          height: 100px;
        }
      `}</style>
    </>
  );
};

export default Profile;
