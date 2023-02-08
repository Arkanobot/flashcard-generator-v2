import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./flashcards";

export default configureStore({
  reducer: {
    //reducerName : imported reducer --format
    cards: cardReducer,
  },
});
