import React from "react";

export const CollectionContext = React.createContext({
  error: null,
  isLoading: true,
  selectedSite: "",
  sites: [],
  collections: [],
});
