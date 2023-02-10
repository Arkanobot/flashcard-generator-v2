import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateNewFlashcard from "../components/CreateNew/CreateNewFlashcard";
import MyFlashcards from "../components/MyFlashcards/MyFlashcards";
import FlashCardDetails from "../components/FlashCardDetails/FlashCardDetails";
import TermCard from "../components/FlashCardDetails/TermCard";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateNewFlashcard />} />
        <Route path="/myflashcard" element={<MyFlashcards />} />
        <Route path="/flashcard/:slug/" element={<FlashCardDetails />}>
          <Route path=":id" element={<TermCard />} />
        </Route>
      </Routes>
    </div>
  );
}
