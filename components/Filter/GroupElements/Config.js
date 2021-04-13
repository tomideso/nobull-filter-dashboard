import React from "react";
import * as Yup from "yup";
import { withFormik, Form, Field, Formik } from "formik";
import {
  getRandomNumber,
  warningAlert,
  copyToClipboard,
} from "utility/helpers";
import DropConfirmation from "../Elements/DropConfirmation";
import LogicRule from "../Elements/LogicRule";

const Config = ({
  close,
  trigger,
  filterBy,
  filterByAlias,
  logicRules,
  filterByNames,
  collectionFields,
  ...props
}) => {
  // const closeHandler = () => {
  //   close();
  //   window.UIkit.offcanvas("#logic-offcanvas-usage").hide();
  // };

  const filterByInputHandler = (evt) => {
    const re = new RegExp("(" + filterByAlias + "[a-z0-9]*)", "ig");
    const value = evt.target.value?.match(re)?.[0];
    evt.target.value = (value || filterByAlias)?.toLowerCase();
  };

  const regex = new RegExp("(" + filterByAlias + "[a-z0-9]+)", "ig");

  return (
    <>
      <Formik
        initialValues={{
          trigger: trigger || "Static Div, Button, Link",
          filterBy: filterBy || filterByAlias + getRandomNumber(6),
          filterByAlias: filterByAlias || "",
          logicRules: logicRules || [],
        }}
        validationSchema={Yup.object().shape({
          trigger: Yup.string().required("trigger is required"),
          filterBy: Yup.string()
            .notOneOf(
              [null, filterByAlias, ...filterByNames],
              "filter-by value entered is invalid"
            )
            .matches(regex, "filter-by value entered is invalid")
            .required("filterBy is required"),
          logicRules: Yup.array()
            .of(
              Yup.object().shape({
                field: Yup.string().required("field is required"),
                fieldType: Yup.string().required("field is required"),
                joiner: Yup.string().required("trigger is required"),
                operator: Yup.string().required("trigger is required"),
                value: Yup.string().required("value is required"),
              })
            )
            .min(1, "Add at least a logic"),
        })}
        onSubmit={(values, { resetForm, setSubmitting, setErrors }) => {
          const { filterByNames, ...formValues } = values;

          props.updateElement(
            formValues,
            props.activeGroupIdx,
            props.activeElementIdx
          );
          warningAlert({ message: "configuration saved", status: "success" });
          close();
        }}>
        {({ values, errors, touched, setValues, setFieldValue }) => {
          return (
            <Form>
              <div className="uk-padding-small divider">
                <div className="uk-flex uk-flex-between">
                  <strong className="uk-text-capitalize uk-text-truncate tm-text-white ">
                    Filter elements
                  </strong>
                  <div>
                    <button
                      type="submit"
                      className="uk-button uk-button-primary uk-text-capitalize  uk-button-small">
                      Save
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="uk-button uk-text-capitalize uk-button-default uk-button-small">
                      Cancel
                    </button>
                    <DropConfirmation
                      message="You will lose all unsaved settings"
                      proceedText="Cancel"
                      initDelete={close}
                    />
                  </div>
                </div>
              </div>

              <div className="uk-padding-small">
                <div className="uk-margin-small-bottom">
                  <h4 className="uk-text-warning">1. Choose trigger type</h4>
                  <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                    Filter trigger <span className="uk-text-warning">*</span>
                  </div>

                  <div className="uk-margin-small uk-grid-small uk-child-width-auto uk-grid filterTrigger">
                    <div className="uk-position-relative">
                      <Field
                        className="uk-radio uk-position-center-top "
                        value="Static Div, Button, Link"
                        type="radio"
                        name="trigger"
                        id="cms-div1"
                      />
                      <label
                        htmlFor="cms-div1"
                        className="tm-label tm-cursor-pointer">
                        Static Div, Button, Link
                      </label>
                    </div>

                    <div className="uk-position-relative ">
                      <Field
                        className="uk-radio uk-position-center-top "
                        value="CMS Collection List"
                        type="radio"
                        name="trigger"
                        id="cms-div"
                      />
                      <label
                        htmlFor="cms-div"
                        className="tm-label tm-cursor-pointer">
                        CMS Collection List
                      </label>
                    </div>
                  </div>
                </div>

                <h4 className="uk-text-warning">2. Name data attribute</h4>

                <div
                  className="uk-grid-small uk-child-width-expand uk-flex uk-flex-middle"
                  uk-grid="">
                  <div className="uk-width-1-4">
                    <span className="uk-form-label uk-text-bold">Name:</span>
                  </div>
                  <div>
                    <div className="uk-flex uk-flex-between">
                      <span>filter-by</span>
                      <span
                        className="uk-background-primary"
                        onClick={() => copyToClipboard("filterBy")}>
                        <span
                          uk-tooltip="copy"
                          className="uk-link uk-icon uk-text-text-top"
                          uk-icon="icon: copy"></span>
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="uk-grid-small uk-child-width-expand uk-flex uk-flex-middle"
                  uk-grid="">
                  <div className="uk-width-1-4">
                    <label
                      className="uk-form-label"
                      htmlFor="form-horizontal-text">
                      Value:
                    </label>
                  </div>
                  <div>
                    <div className="uk-form-controls uk-inline uk-width-1-1">
                      <a
                        style={{ zIndex: "2" }}
                        href="#"
                        className="uk-background-primary uk-form-icon uk-form-icon-flip"
                        onClick={() => copyToClipboard("filterBy")}>
                        <span
                          uk-tooltip="copy"
                          className="uk-link uk-icon  uk-text-text-top "
                          uk-icon="icon: copy"></span>
                      </a>
                      <Field
                        onInput={filterByInputHandler}
                        className={[
                          "uk-input bg-none uk-text-bold uk-width-1-1",
                          errors.filterBy && touched.filterBy
                            ? "tm-form-danger uk-animation-shake"
                            : "",
                        ].join(" ")}
                        id="filter-by"
                        type="text"
                        placeholder=""
                        name="filterBy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <LogicRule
                values={values}
                touched={touched}
                errors={errors}
                setValues={setValues}
                setFieldValue={setFieldValue}
                filterByAlias={filterByAlias}
                collectionFields={collectionFields}
              />

              <style jsx>{`
                .border-left {
                  border-left: 2px solid black;
                }

                .tm-primary {
                  color: #fff;
                  background-color: #1e87f0;
                }
                .divider {
                  border-bottom: 2px solid #000;
                }

                .padding-small {
                  padding: 8px;
                }

                .tm-label {
                  border-radius: 9px;
                  padding: 2px 10px 2px 1.5em;
                  border: 1px solid transparent;
                }

                .uk-text-text-top {
                  vertical-align: text-top;
                }
              `}</style>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Config;
