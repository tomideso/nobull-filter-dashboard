import React, { useState, useContext, useEffect } from "react";
import FilterList from "./FilterList";
import FilterFormFormik from "./FilterForm";
import { CollectionContext } from "components/context/Collection";
import GroupContainer from "components/Filter/FilterGroup/GroupContainer";
import OffCanvasModal from "@/custom components/OffCanvasModal";

export const FilterContainer = () => {
  const {
    nextStep,
    prevStep,
    step,
    filters,
    removeFilter,
    addFilter,
    activeFilterIdx,
    setActiveFilterIdx,
    updateFilter,
    savedResult,
  } = useContext(CollectionContext);

  const [showForm, setShowForm] = useState(false);
  const [formAction, setFormAction] = useState("new");
  const [showModalContent, setShowModalContent] = useState(false);

  const [currentFilter, setCurrentFilter] = useState({});

  console.log(step);
  useEffect(() => {
    if (step == 3) {
      showGroupModal();
    }

    if (!filters.length && savedResult?._id) {
      setFormAction("update");
    }
  }, []);

  const clickHandler = (idx) => {
    setActiveFilterIdx((i) => idx);
    setShowModalContent((e) => true);
    nextStep();
  };

  const showGroupModal = () => {
    window.UIkit.offcanvas("#filter-offcanvas-usage").show();
    setShowModalContent((e) => true);
  };

  const addFilterHandler = () => {
    if (!filters.length) {
      showGroupModal();
    }
  };

  const openForUpdate = (idx) => {
    setActiveFilterIdx((i) => idx);
    setCurrentFilter(filters[idx]);
    setFormAction("update");
    setShowForm(true);
  };

  return (
    <>
      <section
        className="uk-background-secondary "
        uk-height-viewport="offset-top: true;offset-bottom: true">
        {/* form and list */}

        {showForm || !filters.length ? (
          <FilterFormFormik
            addFilter={addFilter}
            addFilterHandler={addFilterHandler}
            updateFilter={updateFilter}
            close={() => setShowForm(false)}
            activeFilterIdx={activeFilterIdx}
            formAction={formAction}
            {...currentFilter}
          />
        ) : (
          <section>
            <ul className="uk-list uk-list-collapse">
              <li className="uk-padding-small">
                <div className="uk-flex uk-flex-between">
                  <div>
                    <strong className="uk-text-capitalize uk-text-truncate tm-text-white uk-margin-small-right">
                      Filter
                    </strong>

                    <span
                      className=" uk-text-bold  uk-button tm-primary uk-button-small uk-button-link"
                      onClick={() => {
                        setShowForm(true);
                        setFormAction("new");
                      }}>
                      <span
                        className="uk-icon"
                        uk-icon="icon: plus; ratio: .9"></span>
                      <span> Add Filters</span>
                    </span>
                  </div>

                  <div>
                    <span
                      onClick={prevStep}
                      className="uk-link uk-icon"
                      uk-icon="icon: close;"></span>
                  </div>
                </div>
              </li>

              <li className="divider "></li>
              {filters.map(({ collection, name, groups }, idx) => (
                <React.Fragment key={`filter-${name.replace(" ", "-")}-${idx}`}>
                  <FilterList
                    collection={collection}
                    name={name}
                    groups={groups}
                    idx={idx}
                    updateHandler={() => openForUpdate(idx)}
                    deleteHandler={() => removeFilter(idx)}
                    clickHandler={() => clickHandler(idx)}
                  />
                  <li className="divider "></li>
                </React.Fragment>
              ))}
            </ul>
          </section>
        )}
        <OffCanvasModal
          id={"filter-offcanvas-usage"}
          showContent={showModalContent}
          close={() => {
            prevStep();
            setShowModalContent(false);
          }}>
          <GroupContainer activeFilterIdx={activeFilterIdx} />
        </OffCanvasModal>
      </section>

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
