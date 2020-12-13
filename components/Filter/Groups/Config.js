import React from "react";
import Container from "../Elements/Container";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import { getRandomNumber } from "utility/helpers";

const Config = ({ values }) => {
  return (
    <>
      {/* <div className="uk-offcanvas-flip">
        <div
          id="offcanvas-usage"
          uk-offcanvas="overlay: true;flip: true;"
          className="uk-offcanvas uk-offcanvas-overlay uk-open uk-display-block"> */}
      <div>
        <div
          id="offcanvas-usage"
          uk-offcanvas="overlay: true;flip: true;"
          className="uk-offcanvas ">
          <div className="uk-offcanvas-bar uk-width-1-2@m border-left uk-padding-remove">
            <span
              style={{ height: "26px", width: "26px" }}
              className="uk-icon-link uk-link uk-icon uk-icon-button uk-offcanvas-close"
              uk-icon="icon:close;"></span>
            <Form>
              <div className="uk-flex uk-flex-between  tm-background-black uk-padding-small uk-margin-large-top">
                <div className="uk-text-large tm-text-white">
                  Filter group details
                </div>
                <div>
                  <button className="uk-button uk-button-primary uk-text-capitalize  uk-button-small">
                    Save
                  </button>
                  &nbsp;
                  <button className="uk-button uk-text-capitalize uk-button-default uk-button-small ">
                    Cancel
                  </button>
                </div>
              </div>

              <div className="uk-padding-small">
                <div className="uk-margin-small-bottom">
                  <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                    Filter group name *
                  </div>
                  <Field
                    className="uk-input bg-none uk-text-bold"
                    name="name"
                  />
                </div>
                <div
                  className="uk-grid uk-grid-stack uk-grid-small uk-child-width-1-2@m"
                  uk-grid="">
                  <div
                    className={
                      values.filterOption != "text" ? "" : "uk-width-1-1"
                    }>
                    <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                      Wrapper Class *{" "}
                    </div>
                    <Field
                      className="uk-input bg-none uk-text-bold pointer-none"
                      name="wrapperClass"
                      readOnly={true}
                    />
                    <div className="uk-text-small uk-text-truncate tm-text-white uk-text-danger">
                      Include class in the wrapper div of this group
                    </div>
                  </div>
                  {values.filterOption != "text" && (
                    <div className="">
                      <div>
                        <span className="uk-text-capitalize uk-text-bold uk-text-truncate">
                          Target Field Class *
                        </span>
                        <span
                          className="uk-icon uk-text-primary uk-link"
                          uk-icon="icon: info;"
                          uk-tooltip="Div class to search in for value."></span>
                      </div>
                      <Field
                        className="uk-input bg-none uk-text-bold pointer-none"
                        name="targetField"
                        readOnly={true}
                      />
                      <div className="uk-text-small uk-text-truncate tm-text-white uk-text-danger"></div>
                    </div>
                  )}
                  <div>
                    <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                      Filter Type *
                    </div>
                    <Field
                      component="select"
                      name="filterType"
                      className="uk-select bg-none uk-text-bold">
                      <option value="exclusive">Exclusive</option>
                      <option value="multi">Multi</option>
                    </Field>
                  </div>

                  <div>
                    <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white ">
                      Filter Option *
                    </div>
                    <Field
                      component="select"
                      name="filterOption"
                      className="uk-select bg-none uk-text-bold">
                      <option value="number">Number</option>
                      <option value="date">Date</option>
                      <option value="text">Text</option>
                    </Field>
                  </div>
                </div>
              </div>

              <Container filterOption={values.filterOption} />
            </Form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .border-left {
          border-left: 2px solid black;
        }

        .tm-primary {
          color: #fff;
          background-color: #1e87f0;
        }
      `}</style>
    </>
  );
};

const FormikConfig = withFormik({
  mapPropsToValues({
    filterOption,
    filterType,
    name,
    wrapperClass,
    targetField,
  }) {
    return {
      filterOption: filterOption || "text",
      filterType: filterType || "exclusive",
      name: name || "",
      targetField: targetField || "text",
      wrapperClass: wrapperClass || getRandomClassName(),
    };
  },
  validationSchema: Yup.object().shape({
    filterOption: Yup.string().required(),
    filterType: Yup.string().required(),
    name: Yup.string().required(),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    console.log(values);
  },
})(Config);

export default FormikConfig;

const getRandomClassName = () => {
  return "fs-" + getRandomNumber(10);
};
