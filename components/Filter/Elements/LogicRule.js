import React, { useState, useRef, useEffect } from "react";
import RadioGroup, {
  RadioInput,
} from "@/custom components/RadioGroup/RadioGroup";
import { getRandomNumber } from "utility/helpers";
import Guide from "./Guide";
import DropConfirmation from "./DropConfirmation";

const LogicRule = ({}) => {
  const [logicOperator, setLogicOperator] = useState("And");

  const [guide, setguide] = useState([]);
  const guideRef = useRef([]);

  useEffect(() => {
    guideRef.current = guide;
  }, [guide]);

  const addGuide = () => {
    if (!guide.length) {
      setguide([
        {
          operator: "contain",
          value: "",
          joiner: "",
        },
      ]);
      return;
    }
    setguide((g) => [
      ...g,
      {
        operator: "not_contain",
        value: "",
        joiner: logicOperator,
      },
    ]);
  };

  const deleteGuide = (idx) => {
    setguide((g) => g.filter((v, i) => idx != i));
  };

  const emptyGuide = () => {
    setguide([]);
  };

  return (
    <div className="uk-card  tm-background-dark">
      {!!guide.length && (
        <>
          <div className="uk-card-header uk-label-muted card-padding  uk-flex uk-flex-middle uk-flex-between">
            <div className="uk-text-bold">Logic rule</div>
            <div className="font-icon uk-text-middle ">
              <span
                className="fa-stack fa-lg uk-button uk-button-link"
                type="button">
                <i className="fa fa-circle fa-lg fa-stack-1x uk-text-danger "></i>
                <i className="fa fa-trash fa-stack-1x fa-inverse font-18"></i>
              </span>
              <DropConfirmation initDelete={emptyGuide} />
            </div>
          </div>
          <div className="uk-padding-small">
            {guide.map((val, idx) => {
              return (
                <Guide
                  key={getRandomNumber(5)}
                  deleteHandler={() => deleteGuide(idx)}
                  {...val}
                  setguide={setguide}
                  guideRef={guideRef}
                  idx={idx}
                />
              );
            })}
          </div>
          <div className="uk-text-left uk-margin-small-left uk-margin-small-bottom uk-flex  uk-flex-middle">
            <RadioGroup>
              <RadioInput
                label="&nbsp;And&nbsp;"
                name="operator"
                value="Male"
                checked={logicOperator === "And"}
                onChange={() => setLogicOperator("And")}
              />
              <RadioInput
                label="&nbsp;OR&nbsp;"
                name="operator"
                value="Female"
                checked={logicOperator === "Or"}
                onChange={() => setLogicOperator("Or")}
              />
            </RadioGroup>
            &nbsp;&nbsp;
            <span
              onClick={addGuide}
              className="uk-button uk-button-link uk-text-capitalize tm-text-primary">
              <span className="uk-icon" uk-icon="icon: plus-circle;"></span> Add
              Condition
            </span>
          </div>
        </>
      )}
      <div className="uk-card-footer card-padding uk-label-muted">
        {!!guide.length ? (
          <span>&nbsp;</span>
        ) : (
          <span
            onClick={addGuide}
            className="uk-button uk-button-small uk-text-capitalize tm-primary uk-text-bold">
            <i className="fa fa-plus "></i>
            Add logic rule
          </span>
        )}
      </div>

      <style jsx>{`
        .card-padding {
          padding: 5px 10px !important;
        }

        .tm-primary {
          background: #1e87f0;
        }

        .tm-text-primary {
          color: #1e87f0;
        }

        .font-icon {
          height: 1em;
          line-height: 1em;
        }

        .font-18 {
          font-size: 18px;
        }

        .font-icon > span {
          height: 1em;
          line-height: 1em;
        }
      `}</style>
    </div>
  );
};

export default LogicRule;
