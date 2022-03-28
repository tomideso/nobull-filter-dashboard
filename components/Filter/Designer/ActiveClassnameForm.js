import { BASE_URL } from "@/constant/constant";
import axios from "axios";
import { CollectionContext } from "components/context/Collection";
import { useCopyToClipboard } from "hooks/useCopyToClipboard";
import React, { useContext, useRef } from "react";
import { debounce } from "utility/helpers";

const ActiveClassnameForm = () => {
  const { copyToClipboard } = useCopyToClipboard();

  const { filters, setFilters, activeFilterIdx, savedResult, setSavedResult } =
    useContext(CollectionContext);

  const filter = filters[activeFilterIdx];

  const input = useRef();

  const inputHandler = (evt) => {
    return axios
      .put(`${BASE_URL}/v1/config/classname/${savedResult._id}`, {
        classname: evt.target.value,
        collectionID: filter.collectionID,
      })
      .then(({ data }) => {
        setSavedResult(data);
        setFilters(data?.filters);
      });
  };

  const debounceInput = debounce(inputHandler, 100);

  return (
    <div className="">
      <div>
        <h4 className="uk-text-warning uk-margin-remove">
          Define class for{" "}
          <span className="uk-label-warning uk-text-secondary">active</span>{" "}
          state of a filter element
        </h4>
        <div className="uk-text-small">
          Add the class below to a filter element and style it as you want. It
          should clearly identify element as an active state.
        </div>
      </div>

      <div className="tm-width-fit tm-background-black uk-flex uk-flex-between tiny-padding">
        <span className="uk-margin-small-right">
          <input
            ref={input}
            className="uk-input uk-background-black  tm-text-white "
            type="text"
            defaultValue={filter.activeClassName}
            onInput={debounceInput}
            style={{
              background: "black",
              borderColor: "black",
              color: "white",
            }}
          />
        </span>
        <div
          onClick={(evt) => copyToClipboard(input.current.value, evt.target)}
          className="uk-text-bold uk-button uk-button-primary uk-button-small"
        >
          <span className="uk-icon" uk-icon="icon: copy; ratio: .8"></span>
          <span> Copy</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveClassnameForm;
