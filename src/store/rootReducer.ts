import { combineReducers } from "@reduxjs/toolkit";

import mainReducer from "./MainSlice";
import bookReducer from "./BookSlice";

const rootReducer = combineReducers({
  main: mainReducer,
  books: bookReducer,
});

export default rootReducer;
