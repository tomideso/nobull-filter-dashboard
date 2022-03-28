import React, { useContext } from "react";
import ListView from "./ListView";
import { CollectionContext } from "components/context/Collection";

const CollectionList = () => {
  const { filters, activeFilterIdx } = useContext(CollectionContext);

  const filter = filters[activeFilterIdx];
  return (
    <div className="">
      <h4 className="uk-text-warning">Add data-attribute to collection list</h4>
      <div className="uk-width-3-4@m">
        <div className="uk-flex uk-flex-between">
          <div></div>
          <div>
            <i
              className="fa fa-question-circle fa-lg tm-cursor-pointer uk-text-primary"
              aria-hidden="true"
            ></i>
          </div>
        </div>

        <div className="uk-padding-small uk-height-small tm-border-primary">
          <ListView value="filter-collection" error={true} />
          <ListView value={filter.name.toLowerCase().replace(/\s+/g, "-")} />
        </div>
      </div>
      <style jsx>{`
        .tm-border-primary {
          border: 1px solid #1e87f0 !important;
        }

        .tiny-padding {
          padding: 5px;
        }
      `}</style>
    </div>
  );
};

export default CollectionList;
