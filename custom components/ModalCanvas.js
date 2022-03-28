import React from "react";
import { noop } from "utility/helpers";

const ModalCanvas = ({
  children,
  style = {},
  className = "",
  zIndex = 0,
  hidden,
  showContent = true,
  close = noop,
  id = "offcanvas-modal",
}) => {
  const closeHandler = () => {
    close();
    window.UIkit.modal("#" + id).hide();
  };

  return (
    <div
      id={id}
      // className="uk-flex-top uk-flex uk-open"
      uk-modal="stack: true; flip:true;  bg-close:false; esc-close:false;"
      style={zIndex ? { zIndex } : {}}
      hidden={hidden}>
      <div
        className={[
          className,
          "uk-modal-dialog  uk-background-secondary uk-position-top-right",
        ].join(" ")}
        style={style}
        uk-overflow-auto={1}
        uk-height-viewport="">
        <span
          onClick={closeHandler}
          style={{ height: "26px", width: "26px" }}
          className="uk-icon-link uk-link uk-icon uk-icon-button uk-position-right uk-margin-small-top uk-margin-small-right"
          uk-icon="icon:close;"></span>

        <span
          onClick={closeHandler}
          style={{ height: "26px", width: "26px" }}
          className="uk-icon-link uk-link uk-icon uk-icon-button "
          uk-icon="icon:close;"></span>

        {showContent ? children : null}
      </div>
      <style jsx>{`
        .flip-right {
          top: 0;
          right: 0;
          background: unset;
        }

        .white {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ModalCanvas;
