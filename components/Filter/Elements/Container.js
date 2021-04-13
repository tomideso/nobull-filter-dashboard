import React from "react";
import Element from "./Element";
import { FieldArray } from "formik";

const Container = ({ values, errors, touched, setValues }) => {
  const deleteElement = (idx) => {
    const elements = values.elements.filter((v, i) => i != idx);
    setValues({ ...values, elements });
  };

  const addElement = () => {
    const element = {
      trigger: "Static Div, Button, Link",
      filterBy: "",
      logicRules: [],
    };
    const elements = values.elements.slice();
    elements.unshift(element);

    setValues({ ...values, elements });
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
          <FieldArray name="elements">
            {() =>
              values.elements?.map((element, i) => {
                return (
                  <Element
                    key={"element" + i}
                    idx={i}
                    deleteElement={() => deleteElement(i)}
                    values={values}
                    errors={errors}
                    touched={touched}
                    setValues={setValues}
                  />
                );
              })
            }
          </FieldArray>
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
