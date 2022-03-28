import React, { useContext, useState } from "react";
import ElementList from "./ElementList";
import { CollectionContext } from "components/context/Collection";
import Config from "./Config";
import OffCanvasModal from "@/custom components/OffCanvasModal";
import Header from "./Header";
import { getRandomNumber } from "utility/helpers";
import { useCollectionSchema } from "hooks/useCollections";
import { Spinner } from "@/custom components/Spinner/Spinner";

const ElementContainer = ({ activeGroupIdx }) => {
  const {
    step,
    nextStep,
    prevStep,
    setstep,
    setFilters,
    activeFilterIdx,
    filters,
    updateElement,
    setSavedResult,
    savedResult,
    selectedCollection,
    saveConfiguration,
    updateConfiguration,
  } = useContext(CollectionContext);

  const { data, isLoading, isError, loading } = useCollectionSchema(
    filters[activeFilterIdx]?.collectionID
  );

  const activeGroup = filters[activeFilterIdx]?.groups[activeGroupIdx];

  const elements = activeGroup?.elements;

  const [showModalContent, setShowModalContent] = useState(false);
  const [activeElementIdx, setActiveElementIdx] = useState(0);

  const clickHandler = (idx) => {
    setShowModalContent((e) => true);
    setActiveElementIdx((e) => idx);
  };

  const config = elements?.[activeElementIdx];

  const collectionFields = data?.fields?.filter(({ type }) =>
    /(PlainText|Number|Date|Bool)/.test(type)
  );

  const multiRefFields = data?.fields?.filter(({ type }) =>
    /(ItemRef)/.test(type)
  );

  const filterByAlias =
    activeGroup?.name?.toLowerCase()?.replace(/\s+/g, "-") + "-";

  const filterByNames = elements?.map(({ filterBy }, i) =>
    filterBy == config?.filterBy ? "" : filterBy
  );

  const trigger = activeGroup?.trigger;

  const hideAddBtn = trigger == "CMS Collection List" && elements?.length > 0;

  const addGroup = () => {
    const elementsLength = elements.length;
    const newElement = {
      // trigger: "Static Div, Button, Link",
      filterBy: filterByAlias + getRandomNumber(6),
      logicRules: [],
    };

    if (trigger != "CMS Collection List") {
      newElement.logicRules.push({
        operator: "contain",
        value: "",
        joiner: "&&",
        field: collectionFields?.[0]?.slug,
        fieldType: collectionFields?.[0]?.type,
      });
    }

    // updateElement(newElement, activeGroupIdx, -1);

    setActiveElementIdx((e) => elementsLength);
    setShowModalContent((e) => true);
  };

  const processConfiguration = () => {
    if (savedResult) {
      return setstep(4);
    }

    saveConfiguration().then((res) => {
      // setSavedResult(res);
      setstep(4);

      // console.log(JSON.stringify(res));
    });
  };

  const closeHandler = () => {
    window.UIkit.offcanvas("#logic-offcanvas-usage").hide();
    setShowModalContent(false);
  };

  const deleteElement = (activeElementIdx) => {
    const copy = filters.slice();
    const filter = copy[activeFilterIdx];
    const group = filter?.groups[activeGroupIdx];
    const elements = group?.elements;

    copy[activeFilterIdx].groups[activeGroupIdx].elements = elements.filter(
      (v, i) => i != activeElementIdx
    );

    return updateConfiguration({
      ...copy[activeFilterIdx],
      filterIndex: activeFilterIdx,
    });
  };

  return (
    <>
      <section
        className="uk-background-secondary "
        uk-height-viewport="offset-top: true;offset-bottom: true"
      >
        {/* form and list */}
        <section></section>
        <section>
          <ul className="uk-list uk-list-collapse">
            {/* <Header clickHandler={clickHandler} /> */}
            <li className="uk-padding-small">
              <div className="uk-flex uk-flex-between">
                {hideAddBtn ? (
                  <div>&nbsp;</div>
                ) : (
                  <div>
                    <strong className="uk-text-capitalize uk-text-truncate tm-text-white uk-margin-small-right">
                      Filter elements
                    </strong>

                    <span
                      className=" uk-text-bold  uk-button tm-primary uk-button-small uk-button-link"
                      uk-toggle="#logic-offcanvas-usage"
                      onClick={addGroup}
                    >
                      <span
                        className="uk-icon"
                        uk-icon="icon: plus; ratio: .9"
                      ></span>
                      <span> Add</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* <span
                    onClick={clickHandler}
                    className="uk-link"
                    uk-icon="icon: close;"></span> */}
                </div>
              </div>
            </li>
            <li className="divider "></li>

            {elements?.map(({ filterBy }, idx) => (
              <React.Fragment key={`element-${idx}`}>
                <ElementList
                  name={filterBy}
                  caption={trigger}
                  idx={idx}
                  filterIdx={activeFilterIdx}
                  deleteHandler={() => deleteElement(idx)}
                  clickHandler={() => clickHandler(idx)}
                />
                <li className="divider "></li>
              </React.Fragment>
            ))}
          </ul>

          {elements?.length ? (
            <div className="uk-padding-small">
              <div className="tm-text-white uk-text-bold">
                When you're done, let's move on
              </div>
              <div>
                <span
                  className=" uk-text-bold uk-button tm-primary uk-button-small"
                  // uk-toggle="#logic-offcanvas-usage"
                  onClick={processConfiguration}
                >
                  Set-up in designer
                  <span
                    className="uk-icon"
                    uk-icon="icon: arrow-right; ratio: .9"
                  ></span>
                </span>
              </div>
            </div>
          ) : null}
        </section>
      </section>

      <OffCanvasModal
        id={"logic-offcanvas-usage"}
        width="uk-width-xlarge@m"
        showContent={showModalContent}
        hideCloseBtn={true}
        close={() => setShowModalContent(false)}
      >
        {collectionFields?.length ? (
          <Config
            activeGroupIdx={activeGroupIdx}
            close={closeHandler}
            filterByAlias={filterByAlias}
            filterByNames={filterByNames}
            activeElementIdx={activeElementIdx}
            setActiveElementIdx={setActiveElementIdx}
            updateElement={updateElement}
            collectionFields={collectionFields}
            multiRefFields={multiRefFields}
            {...config}
          />
        ) : (
          <Spinner />
        )}
      </OffCanvasModal>

      <style jsx>{`
        .divider {
          border-top: 2px solid #000;
        }

        .white {
          color: white;
        }
      `}</style>
    </>
  );
};

export default ElementContainer;
