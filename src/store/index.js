import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  getStackOptionReducer,
  getVendorOptionReducer,
} from "../services/get-options/reducer";
const appReducer = combineReducers({
  getStackOptionReducer,
  getVendorOptionReducer,
});

const store = createStore(appReducer, compose(applyMiddleware(thunk)));

export default store;
