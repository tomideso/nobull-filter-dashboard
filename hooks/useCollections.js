import { useQuery } from "react-query";

export function useCollections(siteId) {
  return useQuery("collections", () => fetchCollections(siteId));
}

const fetchCollections = (siteId) => {
  return fetch("http://localhost:8000/v1/webflow/site/" + siteId, {
    credentials: "include",
  }).then((res) => res.json());
};

const fetchCollection = (collectionId) => {
  return fetch("http://localhost:8000/v1/webflow/collection/" + collectionId, {
    credentials: "include",
  }).then((res) => res.json());
};

export function useCollectionSchema(collectionId) {
  return useQuery("collectionFields", () => fetchCollection(collectionId), {
    enabled: !!collectionId,
  });
}

const fetchDomains = (siteID) => {
  return fetch("http://localhost:8000/v1/webflow/site-domain/" + siteID, {
    credentials: "include",
  }).then((res) => res.json());
};

export function useSiteDomains(siteID) {
  return useQuery("sitedomain", () => fetchDomains(siteID), {
    enabled: !!siteID,
  });
}

const fetchItems = (collectionId) => {
  return fetch("http://localhost:8000/v1/webflow/items/" + collectionId, {
    credentials: "include",
  }).then((res) => res.json());
};

export function useCollectionItems(collectionId) {
  return useQuery("collectionItems", () => fetchItems(collectionId), {
    enabled: !!collectionId,
  });
}
