import { combineReducers } from "redux";

import recipeReducer from "./reducer";

/**
 * This function combine all the reducer and return the rootReducer.
 */
const rootReducer = combineReducers({
  data: recipeReducer,
});

export default rootReducer;
