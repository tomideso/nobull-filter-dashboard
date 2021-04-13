import React from "react";
import Container from "../Elements/Container";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import { getRandomNumber, warningAlert } from "utility/helpers";
import DropConfirmation from "../Elements/DropConfirmation";

const Config = ({ values, errors, touched, setValues, setShowForm }) => {
  const closeHandler = () => {
    setShowForm(false);
    window.UIkit.offcanvas("#offcanvas-usage").hide();
  };

  return (
    <>
      <Form>
        <div className="uk-flex uk-flex-between  tm-background-black uk-padding-small uk-margin-large-top">
          <div className="uk-text-large tm-text-white">
            Filter group details
          </div>
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
              initDelete={closeHandler}
            />
          </div>
        </div>

        <div className="uk-padding-small">
          <div className="uk-margin-small-bottom">
            <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
              Filter group name *
            </div>
            <Field
              className={[
                "uk-input bg-none uk-text-bold",
                errors.name && touched.name
                  ? "tm-form-danger uk-animation-shake"
                  : "",
              ].join(" ")}
              autoComplete="false"
              name="name"
            />
          </div>
          <div
            className="uk-grid uk-grid-stack uk-grid-small uk-child-width-1-2@m"
            uk-grid="">
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

            {/* <div>
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
            </div> */}
            <div
              className={values.filterOption != "text" ? "" : "uk-width-1-1"}>
              <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                Wrapper Class *{" "}
              </div>
              <Field
                className="uk-input bg-none uk-text-bold pointer-none"
                name="wrapperClass"
              />
              <div className="uk-text-small uk-text-truncate tm-text-white uk-text-danger">
                Include class in the wrapper div of this group
              </div>
            </div>
            {/* {values.filterOption != "text" && (
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
                  className={[
                    "uk-input bg-none uk-text-bold",
                    errors.targetField && touched.targetField
                      ? "tm-form-danger uk-animation-shake"
                      : "",
                  ].join(" ")}
                  name="targetField"
                />
                <div className="uk-text-small uk-text-truncate tm-text-white uk-text-danger"></div>
              </div>
            )} */}
          </div>
        </div>

        <Container
          values={values}
          touched={touched}
          errors={errors}
          setValues={setValues}
        />
      </Form>
      {/* </div> */}
      {/* </div>
      </div> */}
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
    // filterOption,
    filterType,
    name,
    wrapperClass,
    // targetField,
    elements,
  }) {
    return {
      filterType: filterType || "exclusive",
      name: name || "",
      wrapperClass: wrapperClass || getRandomClassName(),
      elements: elements || [],
    };
  },
  validationSchema: Yup.object().shape({
    filterType: Yup.string().required(),
    name: Yup.string().required(),
    // targetField: Yup.string().when("filterOption", (val, schema) => {
    //   return !/text/.test(val)
    //     ? Yup.string()
    //         .test(
    //           "len",
    //           "TargetField classname is required",
    //           (val) => val && val.length >= 2
    //         )
    //         .required()
    //     : Yup.string();
    // }),
    elements: Yup.array().of(
      Yup.object().shape({
        trigger: Yup.string().required("trigger is required"),
        filterBy: Yup.string().required("filterBy is required"),
        logicRules: Yup.array().of(
          Yup.object().shape({
            fieldType: Yup.string().required("field is required"),
            field: Yup.string().required("field is required"),
            joiner: Yup.string().required("trigger is required"),
            operator: Yup.string().required("trigger is required"),
            value: Yup.string().required("value is required"),
          })
        ),
      })
    ),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    props.updateGroup(values, props.activeGroupIdx);
    warningAlert({ message: "configuration saved", status: "success" });
  },
})(Config);

export default FormikConfig;

const getRandomClassName = () => {
  return "fs-" + getRandomNumber(15);
};
