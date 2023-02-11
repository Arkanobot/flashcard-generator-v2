import React from "react";
import { useSelector } from "react-redux";
import TitleCard from "./TitleCard";

//<div> this is flashcard details - FlashcardsList</div>

export default function FlashcardsList() {
  const { cards } = useSelector((state) => state.cards);
  return (
    <div className="px-5 my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {cards.map((item, i) => {
          return (
            <div>
              <TitleCard values={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
