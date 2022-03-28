import React, { useContext } from "react";
import ListView from "./ListView";
import { CollectionContext } from "components/context/Collection";
import CodeBlock from "@/custom components/CodeBlock";

const GroupListView = () => {
  const { filters, activeFilterIdx } = useContext(CollectionContext);

  const filter = filters[activeFilterIdx];

  return filter.groups.map(({ name, elements, trigger }) => {
    const groupID = name.toLowerCase().replace(/\s+/g, "-");

    const isCollection = trigger == "CMS Collection List";

    return (
      <div className="uk-margin-bottom" key={"group-" + groupID}>
        <div>
          <button className="uk-button uk-button-primary ">
            Filter group wrapper
          </button>
          <div className="uk-padding-small  tm-border-primary uk-text-warning">
            <ListView label="Name" value="filter-group" />
            <ListView
              label={"Value"}
              value={isCollection ? elements?.[0]?.filterBy : groupID}
            />
            <button className="uk-button uk-button-primary uk-margin-top">
              Filter element
            </button>
            <div className="uk-padding-small tm-border-primary">
              {isCollection ? (
                <>
                  {/* <ul> */}
                  {/* <li> */}
                  <div className="uk-text-muted uk-text-small">
                    Add the below code in an Embed element directly in your
                    filter element collection.
                  </div>

                  <CodeBlock
                    text={`<input type="hidden" class="nobull-trigger-value" value="{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}">`}
                  />
                  {/* </li> */}
                  {/* <li> */}
                  <div className="uk-text-muted uk-text-small uk-margin-small-top">
                    Add the below classname directly to the filter element
                    collection item.
                  </div>
                  <CodeBlock text={`.nobull-trigger-item`} />
                  {/* </li> */}
                  {/* </ul> */}
                </>
              ) : (
                <>
                  {elements.map(({ name, filterBy }) => {
                    return (
                      <div key={filterBy}>
                        <ListView label="Name" value="filter-element" />
                        <ListView label="Value" value={filterBy} />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default GroupListView;
