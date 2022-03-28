import { useCopyToClipboard } from "hooks/useCopyToClipboard";
import React from "react";

const ListView = ({ label = "Name", value, error }) => {
  const { copyToClipboard } = useCopyToClipboard();

  let classname = "uk-text-muted";

  switch (error) {
    case true:
      classname = "uk-text-danger";
      break;
    case false:
      classname = "uk-text-success";
      break;
  }

  return (
    <div className="">
      <div className="uk-flex uk-flex-between">
        <div className="uk-flex uk-flex-middle uk-width-large">
          <span className="uk-margin-small-right tm-text-white">{label}</span>
          <div className="uk-width-1-1 tm-background-black uk-flex uk-flex-between tiny-padding">
            <span className="tm-text-white uk-margin-large-right">
              {" "}
              &nbsp;{value}
            </span>
            <div
              className="uk-text-bold uk-button uk-button-primary uk-button-small"
              onClick={(evt) => copyToClipboard(value, evt.target)}
              uk-tooltip="copy"
            >
              <span className="uk-icon" uk-icon="icon: copy; ratio: .8"></span>
              <span> Copy</span>
            </div>
          </div>
        </div>

        <div>
          <span className={["fa-stack fa-lg", classname].join(" ")}>
            <i className="fa fa-circle fa-stack-1x  "></i>
          </span>
        </div>
      </div>
      <style jsx>{`
        .tm-border-primary {
          border: 1px solid #1e87f0 !important;
        }

        .tiny-padding {
          padding: 5px;
        }

        .tm-width-fit {
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default ListView;
