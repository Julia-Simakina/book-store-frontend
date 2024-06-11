import { combineReducers } from "@reduxjs/toolkit";

import mainReducer from "./MainSlice";
import bookReducer from "./BookSlice";
import genreReducer from "./GenreSlice";

const rootReducer = combineReducers({
  main: mainReducer,
  books: bookReducer,
  genres: genreReducer,
});

export default rootReducer;
