import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateNewFlashcard from "../components/CreateNew/CreateNewFlashcard";
import MyFlashcards from "../components/MyFlashcards/MyFlashcards";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateNewFlashcard />} />
        <Route path="/myflashcard" element={<MyFlashcards />} />
        <Route path="" element={""} />
        <Route path="" element={""} />
      </Routes>
    </div>
  );
}
