import { useQuery } from "react-query";

export function useCollections(siteId) {
  return useQuery("collections", () => fetchCollections(siteId));
}

const fetchCollections = (siteId) => {
  return fetch("http://localhost:8000/v1/webflow/site/" + siteId).then((res) =>
    res.json()
  );
};

const fetchCollection = (collectionId) => {
  return fetch(
    "http://localhost:8000/v1/webflow/collection/" + collectionId
  ).then((res) => res.json());
};

export function useCollectionSchema(collectionId) {
  return useQuery("collectionFields", () => fetchCollection(collectionId), {
    enabled: !!collectionId,
  });
}

const fetchItems = (collectionId) => {
  return fetch(
    "http://localhost:8000/v1/webflow/items/" + collectionId
  ).then((res) => res.json());
};

export function useCollectionItems(collectionId) {
  return useQuery("collectionItems", () => fetchItems(collectionId), {
    enabled: !!collectionId,
  });
}
