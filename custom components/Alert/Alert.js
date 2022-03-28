import React, { useState } from "react";

const Alert = ({ children, className = "uk-alert-danger" }) => {
  const [show, setShow] = useState(true);

  let alert = (
    <div
      className={className + " uk-text-center uk-animation-shake"}
      uk-alert={1}>
      <a
        className="uk-alert-close"
        uk-close={1}
        onClick={() => setShow(false)}></a>
      <p>{children}</p>
    </div>
  );
  if (!show) {
    alert = null;
  }
  return alert;
};

export default Alert;
