import React from "react";
import Link from "next/link";
import { withFormik, Form, Field } from "formik";

const SearchSites = (props) => {
  return (
    <>
      <div>
        <div
          className="uk-grid uk-grid-stack uk-grid-small uk-flex-middle uk-child-width-auto@m uk-margin-left"
          uk-grid="">
          <div>
            <Link href="/filter/new">
              <a className="uk-link-reset uk-text-bold text-white uk-button uk-button-default uk-button-small ">
                <span
                  className="uk-icon"
                  uk-icon="icon: plus; ratio: .9"></span>
                <span> Add Filter</span>
              </a>
            </Link>
          </div>
          <div>
            <Form className="">
              <div className="uk-child-width-expand@m uk-width-1-1@m uk-width-medium uk-margin-auto">
                <div>
                  <div className="uk-inline uk-form-controls text-white">
                    <span
                      className="uk-form-icon uk-icon text-white"
                      uk-icon="icon: search"></span>
                    <Field
                      className="uk-search-input uk-input uk-width-medium@m uk-margin-small-right"
                      name="search"
                      type="text"
                      placeholder="Search sites"
                      style={{ background: "transparent", color: "white" }}
                      // onInput={(evt)=>searchHandler(evt.target.value)}
                    />
                  </div>
                  {/* <button className="uk-button uk-button-text uk-text-capitalize uk-text-muted">
                  Cancel
                </button> */}
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .text-white {
            color: white !important;
          }
        `}
      </style>
    </>
  );
};

const FormikSearchForm = withFormik({
  mapPropsToValues({ search }) {
    return {
      search: search || "",
    };
  },
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    resetForm();
    props.searchHandler("");
  },
})(SearchSites);

export default FormikSearchForm;
