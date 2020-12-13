import React, { useState } from "react";
import Element from "./Element";
import { getRandomNumber } from "utility/helpers";

const element = {
  trigger: "",
  filterBy: "",
  logicRules: [],
};

const Container = ({ filterOption }) => {
  const [elements, setElements] = useState([]);

  const deleteElement = (idx) => {
    setElements((g) => g.filter((v, i) => i != idx));
  };
  const addElement = () => {
    setElements((g) => [{ ...element }, ...g]);
  };
  return (
    <>
      <div className="tm-background-black uk-padding-small">
        <strong className="uk-text-capitalize uk-text-truncate tm-text-white uk-margin-small-right">
          Filter Element
        </strong>

        <span
          className=" uk-text-bold  uk-button tm-primary uk-button-small"
          onClick={addElement}>
          <span className="uk-icon" uk-icon="icon: plus; ratio: .9"></span>
          <span> Add </span>
        </span>
      </div>

      <div className="uk-padding-small">
        <ul className="uk-accordion" uk-accordion="">
          {elements.map((val, idx) => {
            return (
              <Element
                key={getRandomNumber(10)}
                {...val}
                deleteElement={() => deleteElement(idx)}
              />
            );
          })}
        </ul>
      </div>
      <style jsx>{`
        .tm-primary {
          color: #fff;
          background-color: #1e87f0;
        }
      `}</style>
    </>
  );
};

export default Container;
