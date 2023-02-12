import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cardRem } from "../../redux/flashcards";
import { errorToast } from "../ToastifyNotification";

export default function TitleCard(props) {
  const { cards } = useSelector((state) => state.cards);
  const i = props.values;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(cardRem(i));
    errorToast("Flashcard Deleted", "top-center");
  };
  return (
    <div className="mx-auto w-full mt-10 max-w-sm max-h-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-center relative py-10 hover:bg-slate-50 rounded-md">
        <div>
          <img
            src={cards[i].values.cardImg}
            alt={cards[i].values.cardName}
            className={`justify-center absolute -top-[100%] bottom-0 left-0 right-0 w-20 h-20 m-auto border-[3px] border-solid rounded-full border-slate-500`}
          />
        </div>
        <h1 className="mb-1 mt-4 text-3xl font-semibold">
          {cards[i].values.cardName}
        </h1>
        <p className="text-center h-[4.5rem] truncate whitespace-normal my-2 w-[20rem]">
          {cards[i].values.cardDesc}
        </p>
        <p>
          {cards[i].values.terms.length > 1 ? (
            <div>
              <span className="text-sm text-slate-500">Total Cards : </span>
              <span className="font-medium text-xl">
                {cards[i].values.terms.length}
              </span>
            </div>
          ) : (
            <div className="text-sm text-slate-500">
              Only<span className="font-medium text-xl text-black"> 1 </span>
              Card
            </div>
          )}
        </p>
        <Link
          to={`/flashcard/${i}/${0}`}
          className="flex mt-4 space-x-3 md:mt-6"
        >
          <span
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="grid place-content-center px-10 py-2 text-lg font-semibold text-center text-[var(--color-red)] bg-white rounded-lg hover:bg-[var(--color-red)] hover:text-white border-[var(--color-red)] border-2 focus:ring-4 focus:outline-none focus:ring-red-400 hover:translate-y-1 shadow-md transition-all ease-in-out duration-500"
          >
            Show Cards
          </span>
        </Link>
        <div
          onClick={handleRemove}
          className="text-sm text-[var(--color-red)] mt-3 cursor-pointer px-1 border-1 border-solid rounded-md hover:bg-[var(--color-red)] hover:text-white transition-all ease-in-out duration-500"
        >
          Remove card group
        </div>
      </div>
    </div>
  );
}
