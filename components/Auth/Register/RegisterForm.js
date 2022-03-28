import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import * as actions from "redux/actions/reg";
import classes from "./Register.module.css";
import Link from "next/link";
import Alert from "@/custom components/Alert/Alert";

const RegisterForm = ({
  touched,
  errors,
  message,
  error,
  isSubmitting,
  loading,
}) => {
  const webAddrInputHandler = (evt) => {
    evt.target.value = evt.target.value
      .replace(/[^0-9a-z]/g, "")
      .replace(/(\..*)\./g, "$1");
  };

  return (
    <div className="uk-box-shadow-small uk-padding-small uk-background-default uk-border-rounded">
      {!!error && <Alert>{error}</Alert>}
      {!!message && <Alert className="uk-alert-primary">{message}</Alert>}
      <Form className={["uk-form-stacked", classes.FormPadding].join(" ")}>
        <div className="uk-margin">
          <label
            className="uk-form-label uk-text-left uk-text-primary"
            htmlFor="form-stacked-text">
            Your Tele-Health Practice Name
            <span className="uk-text-danger">*</span>
          </label>

          <div className="uk-form-controls uk-inline uk-width-1-1@m">
            <Field
              className={[
                "uk-input uk-width-large@m",
                touched.practiceName && errors.practiceName
                  ? "uk-form-danger"
                  : "",
              ].join(" ")}
              type="text"
              name="practiceName"
            />
          </div>
        </div>

        <div className="uk-margin">
          <label
            className="uk-form-label uk-text-left uk-text-primary"
            htmlFor="form-stacked-text">
            Your Practice Web-Address (Url)
            <span className="uk-text-danger">*</span>
          </label>

          <div className="uk-form-controls uk-width-1-1@m">
            {/* <span className="uk-form-icon uk-icon" uk-icon="icon: mail"></span> */}
            <Field
              className={[
                "uk-input",
                touched.practiceWebUrl && errors.practiceWebUrl
                  ? "uk-form-danger"
                  : "",
              ].join(" ")}
              type="text"
              name="practiceWebUrl"
              onInput={webAddrInputHandler}
            />
            <div className="uk-text-right uk-text-small uk-text-primary">
              .onthemend.com
            </div>
          </div>
        </div>

        <div className="uk-margin">
          <label
            className="uk-form-label uk-text-left uk-text-primary"
            htmlFor="form-stacked-text">
            Email Address<span className="uk-text-danger">*</span>
          </label>

          <div className="uk-form-controls uk-inline uk-width-1-1@m">
            {/* <span className="uk-form-icon uk-icon" uk-icon="icon: mail"></span> */}
            <Field
              className={[
                "uk-input uk-width-large@m",
                touched.email && errors.email ? "uk-form-danger" : "",
              ].join(" ")}
              type="email"
              name="email"
            />
          </div>
        </div>

        <div className="uk-margin">
          <label
            className="uk-form-label uk-text-left uk-text-primary"
            htmlFor="form-stacked-text">
            Password<span className="uk-text-danger">*</span>
          </label>
          <div className="uk-inline uk-form-controls uk-width-1-1@m">
            {/* <span className="uk-form-icon" uk-icon="icon: lock"></span> */}
            <Field
              className={[
                "uk-input uk-width-1-1@m",
                touched.password && errors.password ? "uk-form-danger" : "",
              ].join(" ")}
              name="password"
              type="password"
            />
          </div>
        </div>

        <div className="uk-margin">
          <select
            name="title"
            className="uk-select uk-form-small uk-form-width-xsmall">
            <option value="Dr">Dr</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
          </select>
        </div>

        <div className="uk-margin">
          <label
            className="uk-form-label uk-text-left uk-text-primary"
            htmlFor="form-stacked-text">
            Firstname<span className="uk-text-danger">*</span>
          </label>
          <div className="uk-inline uk-form-controls uk-width-1-1@m">
            {/* <span className="uk-form-icon" uk-icon="icon: lock"></span> */}
            <Field
              className={[
                "uk-input uk-width-1-1@m",
                touched.firstname && errors.firstname ? "uk-form-danger" : "",
              ].join(" ")}
              name="firstname"
              type="text"
            />
          </div>
        </div>

        <div className="uk-margin">
          <label
            className="uk-form-label uk-text-left uk-text-primary"
            htmlFor="form-stacked-text">
            Lastname<span className="uk-text-danger">*</span>
          </label>
          <div className="uk-inline uk-form-controls uk-width-1-1@m">
            {/* <span className="uk-form-icon" uk-icon="icon: lock"></span> */}
            <Field
              className={[
                "uk-input uk-width-1-1@m",
                touched.lastname && errors.lastname ? "uk-form-danger" : "",
              ].join(" ")}
              name="lastname"
              type="text"
            />
          </div>
        </div>

        <button
          type="submit"
          className="uk-button uk-button-primary uk-border-pill uk-width-1-1"
          disabled={loading}>
          {loading ? (
            <i className="fa fa-spinner fa-spin fa-fw"></i>
          ) : (
            "Create Account"
          )}
        </button>

        <div className="uk-text-small uk-child-width-auto uk-margin-small uk-flex-between uk-grid-row-small uk-grid">
          <div>
            <div>
              <Link href="/login">
                <span className="uk-text-small">
                  Have an account?<a>Login Here</a>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({
    email,
    firstname,
    lastname,
    password,
    title,
    practiceName,
    practiceWebUrl,
  }) {
    return {
      email: email || "",
      password: password || "",
      firstname: firstname || "",
      lastname: lastname || "",
      title: title || "Dr",
      practiceName: practiceName || "",
      practiceWebUrl: practiceWebUrl || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required("Password is required"),
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    title: Yup.string().required(),
    practiceName: Yup.string().required(),
    practiceWebUrl: Yup.string().required(),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    // console.log("values", values);
    props.onReg(values);
  },
})(RegisterForm);

const mapStateToProps = (state) => {
  return {
    loading: state.reg.loading,
    message: state.reg.message,
    error: state.reg.error,
    regRedirectPath: state.reg.regRedirectPath,
    regData: state.reg.regData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onReg: (data) => dispatch(actions.register(data)),
    onSetRegRedirectPath: () => dispatch(actions.setRegRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormikLoginForm);
