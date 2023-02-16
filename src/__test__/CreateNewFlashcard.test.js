import { screen, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import CreateNewFlashcard from "../components/CreateNew/CreateNewFlashcard";
import user from "@testing-library/user-event";

describe("Create New Flashcard - Required Check", () => {
  render(
    <Provider store={store}>
      <CreateNewFlashcard />
    </Provider>
  );

  it("Should show warnings on fields that are not filled", async () => {
    const cardName = screen.getByPlaceholderText(/group name/i);
    user.type(cardName, "Test Name");

    const cardDesc = screen.getByPlaceholderText(/group description/i);
    user.type(
      cardDesc,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, magnam."
    );

    const termName = screen.getByPlaceholderText(/term name/i);
    user.type(termName, "Test Term Name");

    const termDef = screen.getByPlaceholderText(/term defination/i);
    user.type(
      termDef,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, odit."
    );

    user.click(screen.getByRole("button", { name: /create/i }));

    await waitFor(() => {
      expect(screen.getByText(/required/i)).toBeInTheDocument();
    });
  });
});
