import React from "react";

const Banner = () => {
  return (
    <section className="uk-container-expand">
      <div
        className={`uk-background-cover
                    uk-background-bottom-center
                    bg-color
                    uk-background-blend-overlay
                    uk-height-small
                    uk-panel
                    Text
                   `}
        data-src="/Image/banner.jpg"
        uk-img="">
        <div className="uk-margin-top uk-margin-large-left">
          <div className="uk-text-large uk-text-bold">
            Spring Field Medical Center
          </div>
          <div className="uk-text-small">
            Forest Fair Shopping Village Shop 3/120 Woogaroo street Forest Lake,
            QLD 4078
          </div>
        </div>
      </div>
      <style jsx>{`
        .Text {
          color: #fff;
        }
        .bg-color {
          background-color: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Banner;
