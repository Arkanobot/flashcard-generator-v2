import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TermBar() {
  const slug = useParams().slug;
  const { cards } = useSelector((state) => state.cards);
  return (
    <div className="hidden md:block">
      <div className="bg-white min-w-[150px]  max-w-[300px] shadow-md p-4 rounded-md md:order-none order-1">
        <strong className="text-slate-500">Flashcards</strong>
        <hr className="border-slate-500" />
        <div className=" p-2 space-y-3 overflow-hidden termName text-center">
          {cards[slug].values.terms.map((term, i) => {
            return (
              <NavLink
                to={`/flashcard/${slug}/${i}`}
                key={i}
                className={`font-semibold block active:text-[var(--color-red)] hover:text-lg hover:text-[var(--color-red)] duration-150`}
              >
                {term.termName}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
