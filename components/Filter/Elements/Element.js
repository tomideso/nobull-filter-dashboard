import React, { useState, useRef, useEffect } from "react";
// import { numberInputHandler } from "utility/helpers";
import LogicRule from "./LogicRule";
import DropConfirmation from "./DropConfirmation";
import { Field } from "formik";

const Element = ({
  trigger,
  filterBy,
  deleteElement,
  idx,
  values,
  errors,
  touched,
  setValues,
}) => {
  const identifier = idx;

  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    UIkit.util.on(ref.current, "hide", function () {
      setShow(false);
    });
    UIkit.util.on(ref.current, "show", function () {
      setShow(true);
    });
  }, []);

  const element = values.elements[idx];
  const namePrefix = `elements.${idx}.`;

  const Errors = (errors.elements?.length && errors.elements[idx]) || {};
  const Touched = (touched.elements?.length && touched.elements[idx]) || {};

  const hasError = Errors.filterBy && Touched.filterBy;

  const logicRuleError = !!Errors.logicRules?.length || hasError;

  return (
    <>
      <li ref={ref}>
        {show ? (
          <a className="uk-accordion-title uk-text-small edit" href="#">
            Edit Filter
          </a>
        ) : (
          <a className="uk-accordion-title uk-clearfix " href="#">
            <div className="uk-flex uk-flex-between">
              <span className="uk-button uk-button-small uk-label-warning">
                {element.trigger}
              </span>
              {logicRuleError ? (
                <span
                  className="uk-badge  uk-text-small uk-float-right uk-text-bold"
                  style={{ background: "rgb(240, 80, 110)", color: "#fff" }}>
                  !
                </span>
              ) : (
                ""
              )}
            </div>
          </a>
        )}
        <div className="info">{element.filterBy}</div>
        <div className="uk-accordion-content" hidden="1">
          <div
            className="uk-grid-small uk-grid uk-grid-stack uk-child-width-1-2@m"
            uk-grid="">
            <div>
              <label
                className="uk-form-label"
                htmlFor={"filterTrigger-" + identifier}>
                Filter Trigger*
              </label>

              <Field
                className="uk-select"
                component="select"
                name={`${namePrefix}trigger`}
                id={"filterTrigger-" + identifier}
                defaultValue={trigger}>
                <option value="CMS Collection List">CMS Collection List</option>
                <option value="Static Div, Button, Link">
                  Static Div, Button, Link
                </option>
              </Field>
            </div>
            <div>
              <label
                className="uk-form-label"
                htmlFor={"filterBy-" + identifier}>
                filter-by*
              </label>
              <div className="uk-inline uk-width-1-1">
                <span
                  className="uk-form-icon uk-form-icon-flip"
                  uk-icon="icon: info"
                  uk-tooltip="Must match filter-by attribute of the current button"></span>
                <Field
                  className={[
                    "uk-input uk-width-1-1",
                    hasError ? "tm-form-danger uk-animation-shake" : " ",
                  ].join(" ")}
                  id={"filterBy-" + identifier}
                  type="text"
                  defaultValue={filterBy}
                  name={`${namePrefix}filterBy`}
                />
              </div>
            </div>
          </div>
          <div className="uk-margin-small-top">
            <LogicRule
              rules={element.logicRules}
              values={values}
              errors={Errors}
              touched={Touched}
              elementIdx={idx}
              setValues={setValues}
              namePrefix={namePrefix}
            />
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
