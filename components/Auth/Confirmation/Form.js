import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const fieldsKey = ["one", "two", "three", "four", "five", "six"];

const ConfirmationForm = ({
  touched = { email: "" },
  errors = { email: "" },
  isSubmitting,
}) => {
  return (
    <div>
      <Form className={["uk-form-stacked"].join(" ")}>
        <div className="uk-margin-auto uk-width-2-3@m">
          <div className="uk-grid uk-grid-stack uk-grid-collapse uk-flex-center uk-child-width-expand">
            {fieldsKey.map((val) => (
              <div key={val}>
                <Field
                  className={[
                    "uk-input uk-form-width-xsmall",
                    touched[val] && errors[val] ? "uk-form-danger" : "",
                  ].join(" ")}
                  name={val}
                  type="text"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="uk-button uk-border-pill uk-margin uk-button-primary uk-text-capitalize uk-width-medium@m"
          disabled={isSubmitting}>
          {isSubmitting ? (
            <i className="fa fa-spinner fa-spin fa-fw"></i>
          ) : (
            "Create my tele-health practice"
          )}
        </button>
        <div>
          <a href="/register">restart registration</a>
        </div>
      </Form>
    </div>
  );
};

const FormikConfirmationForm = withFormik({
  mapPropsToValues({ one, two, three, four, five, six }) {
    return {
      one: one || "",
      two: two || "",
      three: three || "",
      four: four || "",
      five: five || "",
      six: six || "",
    };
  },
  validationSchema: Yup.object().shape({
    one: Yup.number().required(),
    two: Yup.number().required(),
    three: Yup.number().required(),
    four: Yup.number().required(),
    five: Yup.number().required(),
    six: Yup.number().required(),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {},
})(ConfirmationForm);

export default FormikConfirmationForm;
