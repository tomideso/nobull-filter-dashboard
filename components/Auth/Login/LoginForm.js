import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import classes from "./Login.module.css";
import Link from "next/link";

const LoginForm = ({
  touched = { email: "" },
  errors = { email: "" },
  isSubmitting,
}) => {
  return (
    <div className="uk-box-shadow-small uk-padding-small uk-background-default uk-border-rounded">
      <h4 className="">Login To Your Account</h4>
      <Form className={["uk-form-stacked", classes.FormPadding].join(" ")}>
        <a type="submit" className="uk-button uk-button-primary uk-width-1-1">
          Signin
        </a>

        <div className="uk-margin">
          <a
            type="button"
            className="uk-button uk-button-secondary uk-width-1-1"
          >
            Signup
          </a>
        </div>
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({
    email,
    phone,
    firstName,
    lastName,
    address,
    storeEmail,
    name,
    confirmPassword,
    password,
  }) {
    return {
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required("Password is required"),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    const { email, password } = values;
  },
})(LoginForm);

// export default LoginForm;
export default FormikLoginForm;
