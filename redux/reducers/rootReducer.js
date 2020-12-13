import authReducer from "./auth";
import regReducer from "./reg";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  reg: regReducer,
});

export default rootReducer;
