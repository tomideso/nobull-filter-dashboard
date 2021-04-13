import React, { useContext } from "react";

import Config from "./Config";
import { CollectionContext } from "components/context/Collection";

const OffCanvas = ({ id }) => {
  const {
    activeGroup,
    activeGroupIdx,
    updateGroup,
    setShowForm,
    showForm,
  } = useContext(CollectionContext);

  console.log(id);

  return (
    <div>
      <div
        id={id}
        uk-offcanvas="overlay: true; flip: true; bg-close:false; esc-close:false;"
        className="uk-offcanvas uk-offcanvas-overlay">
        <div className="uk-offcanvas-bar uk-width-2-3@m border-left uk-padding-remove">
          <span
            onClick={() => setShowForm(false)}
            style={{ height: "26px", width: "26px" }}
            className="uk-icon-link uk-link uk-icon uk-icon-button uk-offcanvas-close"
            uk-icon="icon:close;"></span>
          {showForm ? (
            <Config
              {...activeGroup}
              activeGroupIdx={activeGroupIdx}
              updateGroup={updateGroup}
              setShowForm={setShowForm}
              updateGroup={updateGroup}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
