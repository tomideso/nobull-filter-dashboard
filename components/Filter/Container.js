import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Axios from "axios";
import {
  useCollections,
  // useCollectionSchema,
  useCollectionItems,
  // useSiteDomains,
} from "hooks/useCollections";
import { CollectionContext } from "components/context/Collection";
import WebflowAuth from "./Auth/WebflowAuth";
import { FilterContainer } from "./FilterForm/FilterContainer";
import { warningAlert } from "utility/helpers";
import Setup from "./Designer/Setup";
import withSpinner from "@/hoc/withSpinner";
import { BASE_URL } from "@/constant/constant";

const setDefaultSite = (sites = []) => {
  return sites[0]?._id;
};

function setDefaultCollection(collections = []) {
  return collections[0]?._id;
}

const Container = ({ sites = [], configuration, setShowSpinner }) => {
  const [savedResult, setSavedResult] = useState(configuration);
  const [step, setstep] = useState(configuration ? 2 : 1);
  const [filters, setFilters] = useState(configuration?.filters || []);
  const [activeFilterIdx, setActiveFilterIdx] = useState(0);
  const [filterActiveClass, setFilterActiveClass] = useState("");

  const [showForm, setShowForm] = useState(true);

  const [domain, setDomain] = useState("");
  const [selectedSite, setSelectedSite] = useState(
    () => configuration?.siteID || setDefaultSite(sites)
  );

  const {
    data: collections,
    error,
    status,
    isLoading,
  } = useCollections(selectedSite);

  useEffect(() => {
    if (configuration?._id) {
      setSavedResult(configuration);
      setstep(2);
      setFilters(configuration?.filters);
    }
  }, [configuration]);

  const config = configuration || {
    domain,
    siteID: selectedSite,
    site: sites?.find(({ _id }) => _id == selectedSite),
    filters,
  };

  // console.log(config);
  const sitesChangeHandler = ({ label, value }) => {
    if (value == "add_auth") {
      window.location.href =
        "https://accounts.finsweet.com/user/integration/create-integration?redirect_url=nobullapp.com";
    }
    setSelectedSite(value);
  };

  const collectionChangeHandler = (value) => {
    // setSelectedCollection(value);
  };

  const updateElement = (values, activeGroupIdx, activeElementIdx) => {
    const copy = filters.slice();
    const filter = copy[activeFilterIdx];
    const group = filter?.groups[activeGroupIdx];
    const elements = group?.elements;
    const element = elements?.[activeElementIdx];

    if (element) {
      copy[activeFilterIdx].groups[activeGroupIdx].elements[activeElementIdx] =
        values;
    } else {
      copy[activeFilterIdx]?.groups[activeGroupIdx]?.elements.push(values);
    }
    return updateFilter({
      ...copy[activeFilterIdx],
      filterIndex: activeFilterIdx,
    });
  };

  const deleteGroup = (idx) => {
    const groups = filters[activeFilterIdx]?.groups;
    const copy = filters.slice();
    copy[activeFilterIdx].groups = groups.filter((v, i) => i != idx);

    return updateFilter({
      ...copy[activeFilterIdx],
      filterIndex: activeFilterIdx,
    });
  };

  const addGroup = ({ name, filterOption, trigger }) => {
    const groups = filters[activeFilterIdx]?.groups;

    const initial = {
      name,
      filterOption,
      trigger,
      elements: [],
    };

    const group = groups.find((val) => val.name == name);

    if (group) {
      const message = `Group with name ${name} already exist`;
      warningAlert({ message });
      throw message;
    }

    const copy = filters.slice();
    copy[activeFilterIdx]?.groups?.push(initial);

    return updateFilter({
      ...copy[activeFilterIdx],
      filterIndex: activeFilterIdx,
    });
  };

  const addFilter = ({ collectionID, name }) => {
    const filter = filters?.find((val) => val.name == name);

    if (filter) {
      const message = `Filter with name ${name} already exist`;
      warningAlert({ message });
      throw message;
    }

    const update = [{ collectionID, name, groups: [] }, ...filters];

    const { _id, ...rest } = config;
    const updatedConfiguration = { ...rest, filters: update };

    return saveConfiguration(updatedConfiguration).then((res) => {
      setFilters(update);
    });
  };

  const updateFilter = ({ filterIndex, ...filterobj }) => {
    const copy = filters?.slice();

    const defaultVal = Object.assign({ groups: [] }, filterobj);

    copy[filterIndex] = {
      ...copy[filterIndex],
      ...defaultVal,
    };

    const update = { ...config, filters: copy };
    return updateConfiguration(update).then((res) => {
      setFilters(copy);
    });
  };

  const removeFilter = (idx) => {
    let copy = filters.slice();

    copy = copy.filter((v, i) => i != idx);
    const update = { ...config, filters: copy };

    setShowSpinner(true);

    return Axios.put(`${BASE_URL}/v1/config/${savedResult._id}`, {
      config: update,
    })
      .then((res) => {
        setSavedResult(res.data);
        setFilters(copy);
        return res.data;
      })
      .finally((done) => {
        setShowSpinner(false);
      });
  };

  const gotoStep = (step) => {
    switch (step) {
      case 2:
        //site must exist;
        break;
      case 3:
        filters?.[0]?.groups?.length && setstep(step);
        break;
      case 4:
        filters?.[0]?.groups?.[0]?.elements?.length && setstep(step);
    }
  };

  function saveConfiguration(settings) {
    setShowSpinner(true);
    return Axios.post(`${BASE_URL}/v1/config/create`, {
      config: settings || config,
    })
      .then((res) => {
        setSavedResult(res.data);
        return res.data;
      })
      .finally((done) => {
        setShowSpinner(false);
      });
  }

  function updateConfiguration(settings) {
    setShowSpinner(true);
    return Axios.put(`${BASE_URL}/v1/config/${savedResult._id}`, {
      config: settings || config,
    })
      .then((res) => {
        setSavedResult(res.data);
        return res.data;
      })
      .finally((done) => {
        setShowSpinner(false);
      });
  }

  return (
    <>
      <CollectionContext.Provider
        value={{
          sites,
          collections,
          selectedSite,
          isLoading,
          error,
          status,
          showForm,
          setShowForm,
          updateElement,
          deleteGroup,
          addGroup,
          step,
          nextStep: () => setstep((s) => s + 1),
          prevStep: () => setstep((s) => s - 1),
          setstep,
          filters,
          addFilter,
          removeFilter,
          updateFilter,
          activeFilterIdx,
          setActiveFilterIdx,
          setFilters,
          filterActiveClass,
          setFilterActiveClass,
          saveConfiguration,
          updateConfiguration,
          savedResult,
          setSavedResult,
        }}
      >
        {configuration ? (
          <>
            {step >= 2 && step < 4 ? (
              <FilterContainer
                collectionChangeHandler={collectionChangeHandler}
                collections={collections}
              />
            ) : null}
            {step >= 4 ? <Setup /> : null}
          </>
        ) : (
          <section className="uk-grid uk-grid-match uk-grid-stack uk-child-width-expand@m uk-grid-small">
            <div className="uk-width-1-4@m">
              <Nav step={step} setstep={gotoStep} />
            </div>
            <div style={{ paddingLeft: "2px" }}>
              {step <= 1 ? (
                <WebflowAuth
                  sites={sites}
                  sitesChangeHandler={sitesChangeHandler}
                />
              ) : null}

              {step >= 2 && step < 4 ? (
                <FilterContainer
                  collectionChangeHandler={collectionChangeHandler}
                  collections={collections}
                />
              ) : null}
              {step >= 4 ? <Setup /> : null}
            </div>
          </section>
        )}
      </CollectionContext.Provider>
    </>
  );
};

export default withSpinner(Container);
