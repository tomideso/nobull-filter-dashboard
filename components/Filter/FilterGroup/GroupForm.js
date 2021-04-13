import React from "react";
import { withFormik, Form, Field } from "formik";
import DropConfirmation from "../Elements/DropConfirmation";
import * as Yup from "yup";
import SwitchButton from "@/custom components/SwitchButton/SwitchButton";

const GroupForm = ({ close, values, errors, setFieldValue }) => {
  return (
    <Form>
      <div
        className="uk-background-secondary"
        uk-height-viewport="offset-top: true;offset-bottom: true">
        <div className="uk-flex uk-flex-between uk-padding-small uk-padding-remove-bottom uk-flex-middle">
          <div className="uk-text-large tm-text-white">New Group</div>
          <div>
            <button
              type="submit"
              className="uk-button uk-button-primary uk-text-capitalize  uk-button-small">
              Create
            </button>
            &nbsp;
            <button
              type="button"
              className="uk-button uk-text-capitalize uk-button-danger uk-button-small">
              Cancel
            </button>
            <DropConfirmation
              message="You will lose all unsaved settings"
              proceedText="Cancel"
              initDelete={close}
            />
          </div>
        </div>
        <ul className="uk-list uk-list-collapse divider">
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text">
              <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                Group Name
              </div>
              <div className=" uk-width-1-1">
                <Field
                  className={["uk-input uk-width-1-1"].join(" ")}
                  type="text"
                  name={`name`}
                />
              </div>
            </div>
          </li>
          <li className="divider "></li>
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text">
              <div className="">
                <input name="allowMulti" type="hidden" />
                <div className="uk-flex uk-flex-middle">
                  <SwitchButton
                    name="filterOption"
                    defaultChecked={false}
                    // defaultChecked={/multi/.test(values.filterOption)}
                    label={"Allow-multi-selections"}
                    color="green"
                  />
                  <span className="uk-text-small tm-text-white">
                    Allow-multi-selections
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .divider {
          border-top: 2px solid #000;
        }

        .white {
          color: white !important;
        }

        .webflow-card:hover {
          background: rgb(30, 135, 240) !important;
        }

        .webflow-card > p {
          visibility: hidden;
        }

        .webflow-card:hover > p {
          visibility: visible;
          color: white;
        }

        .bg-none,
        .bg-none > div {
          background: transparent !important;
          color: #fff;
        }
      `}</style>
    </Form>
  );
};

const GroupFormFormik = withFormik({
  mapPropsToValues({ name, filterOption }) {
    return {
      name: name || "",
      filterOption: filterOption || false,
    };
  },
  validationSchema: Yup.object().shape({
    filterOption: Yup.boolean().required(),
    name: Yup.string().required(),
  }),
  async handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    const val = {
      ...values,
      filterOption: values.filterOption ? "multi" : "exclusive",
    };

    try {
      await props.addGroup(val);
      props.close();
    } catch (e) {
      console.log(e);
      setSubmitting(false);
    }
  },
})(GroupForm);

export default GroupFormFormik;
