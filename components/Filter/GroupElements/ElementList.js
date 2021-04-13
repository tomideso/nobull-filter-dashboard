import React from "react";
import DropConfirmation from "../Elements/DropConfirmation";

const ElementList = ({ deleteHandler, name, caption, clickHandler }) => {
  return (
    <li className="uk-background-secondary uk-padding-small uk-padding-remove-top uk-padding-remove-bottom">
      <div
        className="uk-grid-small uk-child-width-expand  uk-flex uk-flex-middle uk-flex-between"
        uk-grid="">
        <div
          className="tm-cursor-pointer"
          type="button"
          onClick={clickHandler}
          uk-toggle={"#logic-offcanvas-usage"}>
          <span
            uk-icon="icon: cog; ratio:.8;"
            className="uk-text-primary uk-icon uk-text-small tm-text-top"></span>
          &nbsp;
          <div className="uk-display-inline-block">
            <strong className="uk-text-capitalize  uk-text-truncate tm-text-white uk-text-middle">
              {name || "Not specified"}
            </strong>
            <div className="uk-text-small">{caption}</div>
          </div>
        </div>
        <div className="font-icon uk-text-middle uk-text-right uk-width-auto">
          <span
            className="fa-stack fa-lg uk-button uk-button-link"
            type="button">
            <i className="fa fa-circle fa-lg fa-stack-1x uk-text-danger "></i>
            <i className="fa fa-trash fa-stack-1x fa-inverse font-18"></i>
          </span>
          <DropConfirmation initDelete={deleteHandler} />
        </div>
      </div>
      <style jsx>
        {`
          .tm-text-top {
            vertical-align: top;
          }
        `}
      </style>
    </li>
  );
};

export default ElementList;
