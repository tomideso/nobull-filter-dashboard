import React from "react";

const Guide = ({
  isNum = false,
  isDate = false,
  deleteHandler,
  setguide,
  operator = "contain",
  joiner = "",
  value,
  idx,
}) => {
  const inputHandler = (evt) => {
    const val = evt.target.value;
    setguide((g) => {
      const copy = [...g];
      copy[idx].value = val;
      return copy;
    });
    evt.target.focus;
  };

  const selectHandler = (evt) => {
    const val = evt.target.value;
    setguide((g) => {
      const copy = [...g];
      copy[idx].operator = val;
      return copy;
    });
  };

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
          <input
            className="uk-input uk-form-small uk-form-width-small"
            type="text"
            placeholder="value"
            defaultValue={"Div Text"}
            readOnly={true}
          />
        </div>
      </div>

      <div className="">
        <select
          onChange={selectHandler}
          className="uk-select uk-form-small"
          value={operator}>
          <option value="contain">Contains</option>
          <option value="not_contain">Does not contain</option>
          {isNum ||
            (isDate && (
              <>
                <option value="==">Equals</option>
                <option value=">">Greater than</option>
                <option value="<">Less than</option>
                <option value=">=">Greater than/Equals</option>
                <option value="<=">Less than/Equals</option>
              </>
            ))}
        </select>
      </div>
      <div>
        <input
          className="uk-input uk-form-small"
          type="text"
          placeholder="value"
          defaultValue={value}
          onBlur={inputHandler}
        />
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
