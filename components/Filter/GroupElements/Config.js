import React, { useContext } from "react";
import * as Yup from "yup";
import { withFormik, Form, Field, Formik } from "formik";
import {
  getRandomNumber,
  warningAlert,
  copyToClipboard,
} from "utility/helpers";
import DropConfirmation from "../Elements/DropConfirmation";
import LogicRule from "../Elements/LogicRule";
import { CollectionContext } from "components/context/Collection";

const Config = ({
  close,
  filterBy,
  filterByAlias,
  logicRules,
  collectionItemRefSlug,
  collectionItemRefID,
  collectionItem,
  filterByNames,
  collectionFields,
  multiRefFields,
  activeGroupIdx,
  ...props
}) => {
  const { filters, activeFilterIdx } = useContext(CollectionContext);

  const filter = filters[activeFilterIdx];
  const group = filter?.groups[activeGroupIdx];

  const trigger = group?.trigger;

  const filterByInputHandler = (evt) => {
    const re = new RegExp("(" + filterByAlias + "[a-z0-9]*)", "ig");
    const value = evt.target.value?.match(re)?.[0];
    evt.target.value = (value || filterByAlias)?.toLowerCase();
  };

  return (
    <>
      <Formik
        initialValues={{
          collectionItem: collectionItem || "",
          collectionItemRefID: collectionItemRefID || "",
          collectionItemRefSlug: collectionItemRefSlug || "",
          filterBy: filterBy || filterByAlias + getRandomNumber(6),
          filterByAlias: filterByAlias || "",
          logicRules: logicRules || [],
        }}
        validationSchema={Yup.object().shape(
          getSchemaShape(group?.trigger, { filterByAlias, filterByNames })
        )}
        onSubmit={(values, { resetForm, setSubmitting, setErrors }) => {
          const { filterByNames, ...formValues } = values;
          props.updateElement(
            formValues,
            activeGroupIdx,
            props.activeElementIdx
          );
          warningAlert({ message: "configuration saved", status: "success" });
          close();
        }}
      >
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
                      className="uk-button uk-button-primary uk-text-capitalize  uk-button-small"
                    >
                      Save
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="uk-button uk-text-capitalize uk-button-default uk-button-small"
                    >
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
                {trigger == "CMS Collection List" ? (
                  <div className="uk-margin-small-bottom">
                    <div className="uk-width-auto">
                      <div>
                        {/* <label htmlFor="cms-item" className="">
                          CMS Collection Item
                        </label> */}
                        <h4 className="uk-text-warning">
                          Choose filter collection
                        </h4>

                        <Field
                          onChange={(e) => {
                            const value =
                              e.currentTarget.selectedOptions[0]?.value;
                            const collectionId = multiRefFields?.find(
                              ({ slug }) => slug == value
                            )?.validations?.collectionId;
                            setValues({
                              ...values,
                              collectionItemRefID: collectionId,
                              collectionItemRefSlug: value,
                            });
                          }}
                          id="cms-item"
                          className={[
                            "uk-select",
                            errors.collectionItemRefSlug
                              ? "uk-animation-shake tm-form-danger"
                              : " ",
                          ].join(" ")}
                          component="select"
                          name="collectionItemRefSlug"
                        >
                          <option value="">Select a collection item</option>
                          {multiRefFields?.map(({ id, slug, name }) => {
                            return (
                              <option key={id + name} value={slug}>
                                {name}
                              </option>
                            );
                          })}
                        </Field>
                        <input type="hidden" name="collectionItemRefID" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h4 className="uk-text-warning">Name data attribute</h4>

                    <div
                      className="uk-grid-small uk-child-width-expand uk-flex uk-flex-middle"
                      uk-grid=""
                    >
                      <div className="uk-width-1-4">
                        <span className="uk-form-label uk-text-bold">
                          Name:
                        </span>
                      </div>
                      <div>
                        <div className="uk-flex uk-flex-between">
                          <span>filter-by</span>
                          <span
                            className="uk-background-primary"
                            onClick={() => copyToClipboard("filter-by")}
                          >
                            <span
                              uk-tooltip="copy"
                              className="uk-link uk-icon uk-text-text-top"
                              uk-icon="icon: copy"
                            ></span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="uk-grid-small uk-child-width-expand uk-flex uk-flex-middle"
                      uk-grid=""
                    >
                      <div className="uk-width-1-4">
                        <label
                          className="uk-form-label"
                          htmlFor="form-horizontal-text"
                        >
                          Value:
                        </label>
                      </div>
                      <div>
                        <div className="uk-form-controls uk-inline uk-width-1-1">
                          <a
                            style={{ zIndex: "2" }}
                            href="#"
                            className="uk-background-primary uk-form-icon uk-form-icon-flip"
                            onClick={() => copyToClipboard(values.filterBy)}
                          >
                            <span
                              uk-tooltip="copy"
                              className="uk-link uk-icon  uk-text-text-top "
                              uk-icon="icon: copy"
                            ></span>
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
                  </>
                )}
              </div>

              {trigger != "CMS Collection List" && (
                <LogicRule
                  values={values}
                  touched={touched}
                  errors={errors}
                  setValues={setValues}
                  setFieldValue={setFieldValue}
                  filterByAlias={filterByAlias}
                  collectionFields={collectionFields}
                />
              )}
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

const getSchemaShape = (trigger, { filterByAlias, filterByNames }) => {
  const regex = new RegExp("(" + filterByAlias + "[a-z0-9]+)", "ig");

  return trigger == "CMS Collection List"
    ? {
        collectionItemRefSlug: Yup.string().required(
          "Select a collection item."
        ),
        collectionItemRefID: Yup.string().required("Select a collection item."),
      }
    : {
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
      };
};
