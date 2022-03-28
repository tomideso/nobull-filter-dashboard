import { useCopyToClipboard } from "hooks/useCopyToClipboard";
import React from "react";

const CodeBlock = ({ text, children }) => {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <>
      <div
        className="uk-padding-small uk-position-relative tm-border-primary tm-text-white tm-text-small"
        style={{ fontSize: "14px" }}
      >
        <div className="uk-position-right" style={{ top: "-25px" }}>
          <a
            onClick={(evt) => {
              copyToClipboard(text, evt.target);
            }}
            type="button"
            className="uk-icon-link uk-icon uk-margin-small-right uk-text-primary uk-label-secondary"
            uk-icon="icon: copy; ratio: .8"
            uk-tooltip="copy"
          ></a>
        </div>
        <div className="uk-background-default uk-text-danger uk-inline">
          {children ? <div>{children}</div> : <span>{text}</span>}
        </div>
      </div>
    </>
  );
};

export default CodeBlock;
