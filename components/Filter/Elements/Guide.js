import React, { useContext, useRef, useEffect } from "react";
import { Field } from "formik";
// import { CollectionContext } from "components/context/Collection";
// import { useCollectionSchema } from "hooks/useCollections";

const Guide = ({
  deleteHandler,
  collectionFields,
  hasError,
  joiner,
  name,
  idx,
  values,
  setValues,
  setFieldValue,
}) => {
  // const { selectedCollection } = useContext(CollectionContext);

  const fieldRef = useRef();

  useEffect(() => {
    if (!values.logicRules[idx]?.field) {
      setFieldValue(`${name}field`, collectionFields?.[0]?.slug);
      setFieldValue(`${name}fieldType`, collectionFields?.[0]?.type);
    }
  }, []);

  const changeHandler = (evt) => {
    const field = evt.target.selectedOptions[0].value;

    const fieldType = collectionFields?.find(({ slug }) => slug == field)?.type;
    setFieldValue(`${name}fieldType`, fieldType);
    setFieldValue(`${name}field`, field);
  };

  return (
    <div
      className=" uk-grid uk-grid-stack uk-child-width-auto@m uk-grid-small"
      uk-grid="">
      {idx > 0 && (
        <div>
          <span
            className="uk-text-bold uk-text-small"
            style={{ color: "#FFC600" }}>
            {joiner == "&&" ? "And" : "Or"}
          </span>
        </div>
      )}
      <div className="">
        <div>
          <Field
            innerRef={fieldRef}
            onChange={changeHandler}
            className="uk-select uk-form-small"
            component="select"
            name={`${name}field`}>
            {collectionFields?.map(({ _id, slug, name }) => {
              return (
                <option key={_id + name} value={slug}>
                  {name}
                </option>
              );
            })}
          </Field>
        </div>
      </div>

      <Field
        type="hidden"
        name={`${name}fieldType`}
        value={
          collectionFields?.find(
            ({ name }) => name == values.logicRules[idx]?.field
          )?.type
        }
      />

      <div className="">
        <Field
          className="uk-select uk-form-small"
          component="select"
          name={`${name}operator`}>
          <option value="contain">Contains</option>
          <option value="not_contain">Does not contain</option>(
          <>
            <option value="==">Equals</option>
            <option value=">">Greater than</option>
            <option value="<">Less than</option>
            <option value=">=">Greater than/Equals</option>
            <option value="<=">Less than/Equals</option>
          </>
          )
        </Field>
      </div>
      <div>
        <Field
          className={[
            "uk-input uk-form-small",
            hasError ? "uk-animation-shake tm-form-danger" : " ",
          ].join(" ")}
          type="text"
          placeholder="value"
          name={`${name}value`}
        />
        <input type="hidden" name={`${name}joiner`} value={collectionFields} />
      </div>
      <div>
        <span
          style={{ height: "26px", width: "26px" }}
          onClick={deleteHandler}
          className="uk-icon-link uk-link uk-icon uk-icon-button"
          uk-icon="icon:close;"></span>
      </div>
    </div>
  );
};

export default Guide;
