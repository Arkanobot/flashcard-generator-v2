import React from "react";
import { useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailsHeader() {
  const slug = useParams().slug;
  const { cards } = useSelector((state) => state.cards);
  return (
    <div className="flex space-x-5">
      <div>
        <Link to="/myflashcard">
          <FaLongArrowAltLeft
            className="inline-block hover:-translate-x-2 hover:text-[var(--color-red)] duration-300"
            size={"2rem"}
          />
        </Link>
      </div>
      <div className="space-y-5 pb-5 overflow-hidden">
        <h1 className="font-bold text-xl">
          <span className="border-b-2 border-solid border-black rounded-sm">
            {cards[slug].values.cardName}
          </span>
        </h1>
        <p className="text-md text-slate-500 italic">
          {cards[slug].values.cardDesc}
        </p>
      </div>
    </div>
  );
}

export default DetailsHeader;
