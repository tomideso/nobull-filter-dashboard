import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import CollectionSetup from "./CollectionSetup";
import Config from "./Groups/Config";
import Axios from "axios";
import {
  useCollections,
  useCollectionSchema,
  useCollectionItems,
} from "hooks/useCollections";
import { CollectionContext } from "components/context/Collection";

const setDefaultSite = (sites = []) => {
  return sites[0]?._id;
};

function setDefaultCollection(collections = []) {
  return collections[0]?._id;
}

const Container = ({ sites = [] }) => {
  const [groups, setGroups] = useState([]);
  const [activeGroup, setActiveGroup] = useState();
  const [activeGroupIdx, setActiveGroupIdx] = useState(0);
  const [selectedSite, setSelectedSite] = useState(() => setDefaultSite(sites));

  const { data: collections, error, status, isLoading } = useCollections(
    selectedSite
  );

  const [selectedCollection, setSelectedCollection] = useState(() =>
    setDefaultCollection(collections)
  );

  const {
    data: collection = [],
    isLoading: collectionLoading,
    isError,
  } = useCollectionSchema(selectedCollection);

  const { data: items = [] } = useCollectionItems(selectedCollection);

  console.log(items);

  useEffect(() => {
    setSelectedCollection(setDefaultCollection(collections));
  }, [collections]);

  const addGroup = () => {
    const initial = {
      filterOption: "text",
      filterType: "exclusive",
      name: "",
      targetField: "",
      wrapperClass: "",
      elements: [],
    };

    const copy = groups.slice();
    copy.push(initial);
    setGroups((c) => copy);
    const idx = copy.length - 1;
    setActiveGroup(copy[idx]);
    setActiveGroupIdx(idx);
  };

  const updateGroup = (values, idx) => {
    const copy = groups.slice();
    const group = copy[idx];
    console.log(idx, group);

    if (group) {
      console.log(idx, group);
      copy[idx] = values;
      setActiveGroup(values);
      setGroups((c) => copy);
    }
  };

  const sitesChangeHandler = (evt) => {
    setSelectedSite(evt.value);
  };

  const collectionChangeHandler = (evt) => {
    setSelectedCollection(evt.value);
  };
  function saveConfiguration() {
    Axios.post("http://localhost:8000/v1/config/create", {
      config: groups,
    }).then((res) => {
      return res.data;
    });
  }

  console.log(activeGroup);

  return (
    <>
      <CollectionContext.Provider
        value={{
          sites,
          collections,
          selectedCollection,
          selectedSite,
          collection,
          isLoading,
          error,
          status,
        }}>
        <section className="uk-grid uk-grid-match uk-grid-stack uk-child-width-expand@m uk-grid-small">
          <div className="uk-width-1-4@m">
            <Nav />
          </div>
          <div style={{ paddingLeft: "2px" }}>
            <CollectionSetup
              addGroup={addGroup}
              groups={groups}
              setActiveGroup={setActiveGroup}
              setActiveGroupIdx={setActiveGroupIdx}
              saveConfiguration={saveConfiguration}
              sitesChangeHandler={sitesChangeHandler}
              sites={sites}
              selectedSite={selectedSite}
              collectionChangeHandler={collectionChangeHandler}
            />
          </div>
          {/* <div className="uk-width-auto@m">
      </div> */}
        </section>

        <Config
          {...activeGroup}
          updateGroup={updateGroup}
          activeGroupIdx={activeGroupIdx}
          enableReinitialize
        />
      </CollectionContext.Provider>
    </>
  );
};

export default Container;
