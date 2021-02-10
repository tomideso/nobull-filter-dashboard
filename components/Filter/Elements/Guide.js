import React, { useContext, useRef } from "react";
import { Field } from "formik";
import { CollectionContext } from "components/context/Collection";

const Guide = ({ deleteHandler, hasError, joiner, name, idx }) => {
  const { collection } = useContext(CollectionContext);

  const fieldRef = useRef();

  return (
    <div
      className="uk-width-auto uk-grid uk-grid-stack uk-child-width-auto uk-grid-small"
      uk-grid="">
      {idx > 0 && (
        <div>
          <span
            className="uk-text-bold uk-text-small"
            style={{ color: "#FFC600" }}>
            {joiner}
          </span>
        </div>
      )}
      <div className="">
        <div>
          <Field
            innerRef={fieldRef}
            className="uk-select uk-form-small"
            component="select"
            // defaultValue={collection?.fields[0]?.slug}
            name={`${name}field`}>
            {collection?.fields?.map(({ _id, slug, name }) => {
              return (
                <option key={_id + name} value={slug}>
                  {name}
                </option>
              );
            })}
          </Field>
        </div>
      </div>

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
        <Field type="hidden" name={`${name}joiner`} />
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
