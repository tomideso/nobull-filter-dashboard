import React, { useState, useRef } from "react";
import { numberInputHandler } from "utility/helpers";
import LogicRule from "./LogicRule";
import DropConfirmation from "./DropConfirmation";

const Element = ({ type = "text", deleteElement }) => {
  const [state, setstate] = useState();
  const onInput = { onInput: type == "number" ? numberInputHandler : null };

  return (
    <>
      <li>
        <a className="uk-accordion-title" href="#">
          Item 1
        </a>
        <a className="uk-accordion-title uk-text-small edit" href="#">
          Edit Filter
        </a>
        <div className="info">dsfs</div>

        <div className="uk-accordion-content" hidden="1">
          <div
            className="uk-grid-small uk-grid uk-grid-stack uk-child-width-1-2@m"
            uk-grid="">
            <div>
              <label className="uk-form-label" htmlFor="filterTrigger">
                Filter Trigger*
              </label>

              <select
                className="uk-select"
                id="filterTrigger"
                defaultValue="Static Div, Button, Link">
                <option value="CMS Collection List">CMS Collection List</option>
                <option value="Static Div, Button, Link">
                  Static Div, Button, Link
                </option>
              </select>
            </div>
            <div>
              <label className="uk-form-label" htmlFor="filterBy">
                filter-by*
              </label>
              <input
                className="uk-input"
                id="filterBy"
                type="text"
                name="filterBy"
                {...onInput}
              />
            </div>
          </div>
          <div className="uk-margin-small-top">
            <LogicRule />
          </div>
          <div className="uk-margin-small-top">
            <span
              className="uk-button uk-button-danger uk-button-small uk-text-capitalize uk-float-right"
              type="button">
              Delete element
            </span>
            <DropConfirmation initDelete={deleteElement} />
          </div>
        </div>
      </li>
      <style jsx>{`
        li.uk-open > .uk-accordion-title:not(.edit) {
          display: none;
        }

        li.uk-open > .info {
          display: none;
        }

        li:not(.uk-open) > .edit {
          display: none;
        }

        .fit-content {
          width: fit-content;
        }
      `}</style>
    </>
  );
};

export default Element;
