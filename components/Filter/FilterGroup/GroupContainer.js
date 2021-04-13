import React, { useState, useContext, useEffect } from "react";
import GroupList from "./GroupList";
import GroupFormFormik from "./GroupForm";
import { CollectionContext } from "components/context/Collection";
import OffCanvasModal from "@/custom components/OffCanvasModal";
import ElementContainer from "../GroupElements/ElementContainer";

const GroupContainer = () => {
  const {
    nextStep,
    prevStep,
    deleteGroup,
    activeFilterIdx,
    filters,
    addGroup,
    step,
  } = useContext(CollectionContext);

  const [showForm, setShowForm] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  const [activeGroupIdx, setActiveGroupIdx] = useState(0);

  const groups = filters[activeFilterIdx]?.groups;

  const clickHandler = (idx) => {
    setActiveGroupIdx((i) => idx);
    setShowModalContent((e) => true);
    window.UIkit.offcanvas("#group-offcanvas-usage").show();
  };

  return (
    <>
      <section
        className="uk-background-secondary "
        uk-height-viewport="offset-top: true;offset-bottom: true">
        {/* form and list */}

        {showForm ? (
          <GroupFormFormik
            addGroup={addGroup}
            close={() => setShowForm(false)}
          />
        ) : (
          <section>
            <ul className="uk-list uk-list-collapse">
              <li className="uk-padding-small">
                <div className="uk-flex uk-flex-between">
                  <div>
                    <strong className="uk-text-capitalize uk-text-truncate tm-text-white uk-margin-small-right">
                      Filter Groups
                    </strong>

                    <span
                      className=" uk-text-bold  uk-button tm-text-primary uk-button-small uk-button-link"
                      onClick={() => setShowForm(true)}>
                      <span
                        className="uk-icon"
                        uk-icon="icon: plus; ratio: .9"></span>
                      <span> Add groups</span>
                    </span>
                  </div>

                  <div>
                    {/* <span
                      onClick={prevStep}
                      className="uk-link"
                      uk-icon="icon: close;"></span> */}
                  </div>
                </div>
              </li>

              <li className="divider "></li>
              {groups?.map(({ collection, name, elements }, idx) => (
                <React.Fragment
                  key={`element-${name.replace(" ", "-")}-${idx}`}>
                  <GroupList
                    collection={collection}
                    name={name}
                    elements={elements}
                    idx={idx}
                    filterIdx={activeFilterIdx}
                    deleteHandler={() => deleteGroup(idx)}
                    clickHandler={() => clickHandler(idx)}
                  />
                  <li className="divider "></li>
                </React.Fragment>
              ))}
            </ul>
          </section>
        )}
      </section>

      <OffCanvasModal
        id={"group-offcanvas-usage"}
        width="uk-width-3-5@m"
        showContent={showModalContent}
        close={() => setShowModalContent(false)}>
        <ElementContainer activeGroupIdx={activeGroupIdx} />
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

export default GroupContainer;
