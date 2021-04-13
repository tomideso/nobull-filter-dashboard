import React, { useContext } from "react";
import ListView from "./ListView";
import { CollectionContext } from "components/context/Collection";

const GroupListView = () => {
  const { filters, activeFilterIdx } = useContext(CollectionContext);

  const filter = filters[activeFilterIdx];
  return filter.groups.map(({ name, elements }) => {
    const groupID = name.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="uk-margin-bottom" key={"group-" + groupID}>
        <div>
          <button className="uk-button uk-button-primary ">
            Filter group wrapper
          </button>
          <div className="uk-padding-small  tm-border-primary uk-text-warning">
            {/* {filters[0]} */}
            <ListView label="Name" value="filter-group" />
            <ListView label={"Value"} value={groupID} />

            <button className="uk-button uk-button-primary uk-margin-top">
              Filter element
            </button>
            <div className="uk-padding-small tm-border-primary">
              {elements.map(({ name, filterBy }) => {
                return (
                  <div key={filterBy}>
                    <ListView label="Name" value="filter-element" />
                    <ListView label="Value" value={filterBy} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default GroupListView;
