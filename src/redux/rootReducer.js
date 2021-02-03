import { combineReducers } from "redux";
import shoppingReducer from "./shopping/shoping-reducers";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
