import React, { useEffect, ReactDOM as DOM } from "react";
import dynamic from "next/dynamic";

const ModalPortal = ({ id }) => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute(
    "uk-offcanvas",
    "overlay: true; flip: true; bg-close:false; esc-close:false; stack:true;"
  );
  modalRoot.id = id;
  modalRoot.className = "uk-offcanvas uk-offcanvas-overlay flip-canvas";

  useEffect(() => {
    document.body.appendChild(modalRoot);
    return () => {
      document.body.removeChild(modalRoot);
    };
  });

  return DOM.createPortal(props.children, modalRoot);
};
