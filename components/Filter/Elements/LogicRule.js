import React, { useState, useContext } from "react";
import RadioGroup, {
  RadioInput,
} from "@/custom components/RadioGroup/RadioGroup";
import Guide from "./Guide";
import DropConfirmation from "./DropConfirmation";
import { CollectionContext } from "components/context/Collection";

const LogicRule = ({
  values,
  setValues,
  setFieldValue,
  errors,
  touched,
  elementIdx,
  collectionFields,
}) => {
  const { collection } = useContext(CollectionContext);

  const [joiner, setLogicOperator] = useState("&&");

  const logic = {
    operator: "contain",
    value: "",
    joiner,
    field: collection?.fields?.[0]?.slug,
  };

  const emptyGuide = () => {
    const elements = [...values.elements];
    elements[elementIdx].logicRules = [];
    setValues({ ...values, elements });
  };

  const deleteRule = (idx) => {
    let logicRules = values.logicRules.filter((v, i) => i != idx);
    setValues({ ...values, logicRules });
  };

  const addRule = () => {
    const logicRules = [...values.logicRules, logic];
    setValues({ ...values, logicRules });
  };

  const logicRulesError = errors.logicRules && touched.logicRules;

  return (
    <div className="uk-card  tm-background-dark">
      {!!values.logicRules?.length && (
        <>
          <div className="uk-card-header uk-label-muted card-padding  uk-flex uk-flex-middle uk-flex-between">
            <div className="uk-text-bold">Logic rule</div>
            {/* <div className="font-icon uk-text-middle ">
              <span
                className="fa-stack fa-lg uk-button uk-button-link"
                type="button">
                <i className="fa fa-circle fa-lg fa-stack-1x uk-text-danger "></i>
                <i className="fa fa-trash fa-stack-1x fa-inverse font-18"></i>
              </span>
              <DropConfirmation initDelete={emptyGuide} />
            </div> */}
          </div>
          <div className="uk-padding-small">
            {values.logicRules.map((val, idx) => {
              const Errors =
                (errors?.logicRules?.length && errors.logicRules[idx]) || {};
              const Touched =
                (touched?.logicRules?.length && touched.logicRules[idx]) || {};

              const hasError = Errors.value && Touched.value;
              const guideNaming = `logicRules.${idx}.`;
              const fieldValue = {
                [guideNaming + "field"]: collection?.fields?.[3]?.slug,
              };

              return (
                <Guide
                  key={"logicRules" + idx}
                  deleteHandler={() => deleteRule(idx)}
                  {...val}
                  idx={idx}
                  hasError={hasError}
                  name={guideNaming}
                  {...fieldValue}
                  collectionFields={collectionFields}
                  values={values}
                  setValues={setValues}
                  setFieldValue={setFieldValue}
                />
              );
            })}
          </div>
          <div className="uk-text-left uk-margin-small-left uk-margin-small-bottom uk-flex  uk-flex-middle">
            <RadioGroup>
              <RadioInput
                label="&nbsp;And&nbsp;"
                name={`logic-operator`}
                value="Male"
                checked={joiner === "&&"}
                onChange={() => setLogicOperator("&&")}
              />
              <RadioInput
                label="&nbsp;OR&nbsp;"
                name={`logic-operator`}
                value="Female"
                checked={joiner === "||"}
                onChange={() => setLogicOperator("||")}
              />
            </RadioGroup>
            &nbsp;&nbsp;
            <span
              onClick={addRule}
              className="uk-button uk-button-link uk-text-capitalize tm-text-primary">
              <span className="uk-icon" uk-icon="icon: plus-circle;"></span> Add
              Condition
            </span>
          </div>
        </>
      )}
      <div className="uk-card-footer card-padding uk-label-muted">
        {!!values?.logicRules?.length ? (
          <span>&nbsp;</span>
        ) : (
          <span
            onClick={addRule}
            className={[
              "uk-button uk-button-small uk-text-capitalize  uk-text-bold",
              logicRulesError
                ? "uk-button-danger uk-animation-shake "
                : "tm-primary",
            ].join(" ")}>
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

        .tm-border-danger {
          border: 1px solid #f0506e !important;
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
