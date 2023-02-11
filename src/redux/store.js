import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./flashcards";
import printReducer from "./print";

export default configureStore({
  reducer: {
    //reducerName : imported reducer --format
    cards: cardReducer,
    print: printReducer,
  },
});
