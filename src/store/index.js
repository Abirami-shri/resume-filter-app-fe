import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  getStackOptionReducer,
  getVendorOptionReducer,
} from "../services/get-options/reducer";
import { postResumeReducer } from "../services/post-resume-with-options/reducer";
const appReducer = combineReducers({
  getStackOptionReducer,
  getVendorOptionReducer,
  postResumeReducer,
});

const store = createStore(appReducer, compose(applyMiddleware(thunk)));

export default store;
