import React, { useRef } from "react";

const DropConfirmation = ({ initDelete }) => {
  const ref = useRef();

  return (
    <div ref={ref} uk-drop="mode: click;offset:10; pos: top-right">
      <div className="fit-content uk-padding-small tm-background-black tm-text-white ">
        <div className="uk-margin-small-bottom">
          This action can't be undone.
          <br />
          Delete it anyway?
        </div>

        <div className="uk-flex uk-flex-between ">
          <span
            onClick={() => window.UIkit.drop(ref.current).hide(0)}
            className="uk-button uk-button-default uk-button-small uk-text-capitalize uk-float-right"
            type="button">
            Keep it
          </span>

          <span
            className="uk-button uk-button-danger uk-button-small uk-text-capitalize uk-float-right"
            type="button"
            onClick={initDelete}>
            Delete
          </span>
        </div>
      </div>
      <style jsx>{`
        .fit-content {
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default DropConfirmation;
