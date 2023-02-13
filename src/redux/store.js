import { configureStore } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../components/LocalStorage";
import cardReducer from "./flashcards";
import printReducer from "./print";

const preloadedState = loadFromLocalStorage();

export default configureStore({
  reducer: {
    //reducerName : imported reducer --format
    cards: cardReducer,
    print: printReducer,
  },
  preloadedState,
});
