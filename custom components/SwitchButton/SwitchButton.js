import React from "react";
import classes from "./SwitchButton.module.css";

const SwitchButton = ({
  name,
  defaultChecked,
  color = "blue",
  handleChange,
}) => {
  return (
    <div className="uk-flex-center uk-flex">
      <label>
        <input
          onInput={handleChange}
          defaultChecked={defaultChecked}
          type="checkbox"
          name={name}
          className={[
            classes.iosSwitch,
            classes[color],
            classes.tinyswitch,
          ].join(" ")}
        />
        <div>
          <div></div>
        </div>
      </label>
    </div>
  );
};

export default SwitchButton;
