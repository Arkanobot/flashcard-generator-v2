import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TbArrowLeftSquare, TbArrowRightSquare } from "react-icons/tb";

export default function TermCountArrows() {
  const { cards } = useSelector((state) => state.cards);
  const { slug, id } = useParams();
  let idInt = parseInt(id);
  const navigate = useNavigate();
  const handleClick = (action) => {
    if (action === "back" && idInt > 0) {
      navigate(`/flashcard/${slug}/${idInt - 1}`);
    } else if (
      action === "next" &&
      idInt < cards[slug].values.terms.length - 1
    ) {
      navigate(`/flashcard/${slug}/${idInt + 1}`);
    }
  };
  return (
    <>
      <TbArrowLeftSquare
        size={`2rem`}
        className={`${
          idInt > 0
            ? "hover:text-[var(--color-red)] hover:-translate-x-2 duration-300"
            : "text-slate-300"
        }`}
        onClick={() => handleClick(`back`)}
      />
      <span className="text-lg font-bold">
        [{idInt + 1} / {cards[slug].values.terms.length}]
      </span>
      <TbArrowRightSquare
        size={`2rem`}
        className={`${
          idInt < cards[slug].values.terms.length - 1
            ? "hover:text-[var(--color-red)] hover:translate-x-2 duration-300"
            : "text-slate-300"
        }`}
        onClick={() => handleClick(`next`)}
      />
    </>
  );
}
