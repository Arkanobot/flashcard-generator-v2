import React from "react";
import { Outlet } from "react-router-dom";
import DetailsHeader from "./DetailsHeader";
import TermBar from "./TermBar";
import Buttons from "./Buttons";
import TermCountArrows from "./TermCountArrows";

export default function FlashCardDetails() {
  return (
    <div className="md:mt-10  px-5  xl:px-44  my-5">
      <DetailsHeader />
      <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 space-x-3">
        <TermBar />
        <div className="col-span-3 grid justify-center">
          <Outlet />
          <div className="flex text-slate-800 cursor-pointer justify-center my-5 space-x-5">
            <TermCountArrows />
          </div>
        </div>
        <div>
          <Buttons />
        </div>
      </div>
    </div>
  );
}
