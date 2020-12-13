import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/rootReducer";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware([thunk]));

export const initStore = () => store;

export const ReduxWrapper = createWrapper(initStore);
