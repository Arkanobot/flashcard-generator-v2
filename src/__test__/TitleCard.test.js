import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import FlashcardsList from "../components/MyFlashcards/FlashcardsList";
import { Provider } from "react-redux";
// import store from "../redux/store";
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../redux/flashcards";

describe("Flash cards list", () => {
  it("Should show title cards when there is value in the store", () => {
    const store = configureStore({
      reducer: {
        cards: cardReducer,
      },
      preloadedState: {
        cards: [
          {
            values: {
              cardName: "A Test Name",
              cardDesc: "A Test card description",
              cardImg: "https://unsplash.com/photos/fXghdlO6mgk",
              terms: [{ termName: "Test Term1" }, { termName: "Test Term2" }],
            },
          },
        ],
      },
    });
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FlashcardsList />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId("TitleCard")).toBeInTheDocument();
  });
});
