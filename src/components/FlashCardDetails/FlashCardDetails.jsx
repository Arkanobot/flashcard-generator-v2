import React from "react";
import { Outlet } from "react-router-dom";
import DetailsHeader from "./DetailsHeader";
import TermBar from "./TermBar";
import Buttons from "./Buttons";
import TermCountArrows from "./TermCountArrows";
import { useSelector } from "react-redux";

export default function FlashCardDetails() {
  const { print } = useSelector((state) => state.print);
  return (
    <div className="md:mt-10  px-5  xl:px-44  my-5">
      <DetailsHeader />
      <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 space-x-3">
        <TermBar />
        <div className="col-span-2 md:col-span-3 grid justify-center">
          <Outlet />
          <div
            className={`flex text-slate-800 cursor-pointer justify-center my-5 space-x-5 ${
              print === 1 ? "hidden" : null
            }`}
          >
            <TermCountArrows />
          </div>
        </div>
        <div
          className={`grid place-content-center md:place-content-start col-span-2 md:col-span-1 ${
            print === 1 ? "hidden" : null
          }`}
        >
          <Buttons />
        </div>
      </div>
    </div>
  );
}
