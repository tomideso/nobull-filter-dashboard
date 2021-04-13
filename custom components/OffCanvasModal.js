import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { noop } from "utility/helpers";
import dynamic from "next/dynamic";

const OffCanvasModal = ({
  id = "offcanvas-usage",
  children,
  showContent = true,
  width = "uk-width-2-3@m",
  close = noop,
  hideCloseBtn = false,
}) => {
  const closeHandler = () => {
    close();
    window.UIkit.offcanvas("#" + id).hide();
  };

  const ref = useRef();

  const element = (
    <>
      <div
        ref={ref}
        id={id}
        // uk-offcanvas="overlay: true; flip: true; bg-close:false; esc-close:false; container:body;"
        uk-offcanvas="overlay: true; flip: true; bg-close:false; esc-close:false; stack:true;"
        className="uk-offcanvas uk-offcanvas-overlay">
        <div
          className={[
            "uk-offcanvas-bar  flip-canvas  border-left uk-padding-remove uk-position-right",
            width,
          ].join(" ")}>
          {!hideCloseBtn && (
            <span
              onClick={closeHandler}
              style={{ height: "26px", width: "26px" }}
              className="uk-icon-link uk-link uk-icon uk-icon-button uk-position-right uk-margin-small-top uk-margin-small-right"
              uk-icon="icon:close;"></span>
          )}
          <div>{showContent ? children : null}</div>
        </div>
      </div>

      <style jsx>{`
        .flip-canvas {
          left: auto;
        }
      `}</style>
    </>
  );

  return ReactDOM.createPortal(element, document.body);
};

export default dynamic(() => Promise.resolve(OffCanvasModal), {
  ssr: false,
});
