import React from "react";
import { useSelector } from "react-redux";
import EmptyPage from "./EmptyPage";
import FlashcardsList from "./FlashcardsList";

export default function MyFlashcards() {
  const { cards } = useSelector((state) => state.cards);
  return (
    <div className="my-5 px-5 2xl:px-44 xl:px-20 flex flex-col">
      {cards.length === 0 ? <EmptyPage /> : <FlashcardsList />}
    </div>
  );
}
