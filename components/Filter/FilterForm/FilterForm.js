import React, { useContext } from "react";
import { withFormik, Form, Field } from "formik";
import DropConfirmation from "../Elements/DropConfirmation";
import * as Yup from "yup";
import { CollectionContext } from "components/context/Collection";
import dynamic from "next/dynamic";
import { useCollectionItems } from "hooks/useCollections";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

const FilterForm = ({
  close,
  errors,
  touched,
  values,
  formAction,
  setFieldValue,
}) => {
  const {
    isLoading,
    collections = [],
    filters,
    activeFilterIdx,
  } = useContext(CollectionContext);

  const parseCollections = () => {
    return collections?.reduce((curr, val) => {
      const { name: label, slug, singularName, _id } = val;

      curr.push({ label, value: _id });

      return curr;
    }, []);
  };

  const showWarning =
    formAction == "update" && filters?.[activeFilterIdx]?.groups?.length;

  const collectionOptions = parseCollections();

  const collectionID =
    values.collectionID &&
    collectionOptions.find(({ value }) => value == values.collectionID);

  const collectionItems = useCollectionItems(values.collectionID);
  // console.log(values.collectionID, JSON.stringify(collectionItems.data));

  return (
    <Form>
      <div
        className="uk-background-secondary"
        uk-height-viewport="offset-top: true;offset-bottom: true"
      >
        <div className="uk-flex uk-flex-between uk-padding-small uk-padding-remove-bottom uk-flex-middle">
          <div className="uk-text-large tm-text-white">
            {formAction == "update" ? "Update Filter" : "New Filter"}
          </div>
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
              className="uk-button uk-text-capitalize uk-button-danger uk-button-small"
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
        <ul className="uk-list uk-list-collapse divider">
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text">
              <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                Webflow collection to filter
              </div>
              <div
                className={[
                  errors.collectionID && touched.collectionID
                    ? "tm-border-danger uk-animation-shake"
                    : "",
                ].join(" ")}
              >
                <Select
                  name="collectionID"
                  value={collectionID || collectionOptions[0]}
                  autoload={false}
                  isLoading={isLoading}
                  options={collectionOptions}
                  onChange={(evt) => {
                    setFieldValue("collectionID", evt.value);
                  }}
                  className="bg-none uk-text-bold"
                />
              </div>
              {!!showWarning && (
                <div className="uk-text-warning uk-text-bold">
                  If you change the collection, everything will F***k up
                </div>
              )}
            </div>
          </li>

          <li className="divider "></li>
          <li className="uk-background-secondary uk-padding-small">
            <div className="uk-link-text">
              <div className="uk-text-capitalize uk-text-bold uk-text-truncate tm-text-white">
                Filter Name
              </div>
              <div className=" uk-width-1-1">
                <Field
                  className={[
                    "uk-input uk-width-1-1 bg-none uk-text-bold",
                    errors.name && touched.name
                      ? "tm-form-danger uk-animation-shake"
                      : "",
                  ].join(" ")}
                  type="text"
                  name={`name`}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .divider {
          border-top: 2px solid #000;
        }

        .tm-border-danger {
          outline: 1px solid rgb(240, 80, 110);
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

const FilterFormFormik = withFormik({
  mapPropsToValues({ name, collectionID, filterActive }) {
    return {
      name: name || "",
      collectionID: collectionID || "",
      filterActive: filterActive || "active",
    };
  },
  validationSchema: Yup.object().shape({
    collectionID: Yup.string().required(),
    name: Yup.string().required(),
    filterActive: Yup.string().required(),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    try {
      if (props.formAction == "update") {
        return props
          .updateFilter({ ...values, filterIndex: props.activeFilterIdx })
          .then((res) => {
            props.close();
          });
      }
      props.addFilter(values).then((res) => {
        props.addFilterHandler();
        props.close();
      });
    } catch (e) {
      console.log(e);
      setSubmitting(false);
    }
  },
})(FilterForm);

export default FilterFormFormik;
