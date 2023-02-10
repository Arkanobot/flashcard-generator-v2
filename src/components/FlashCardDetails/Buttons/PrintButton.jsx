import React from "react";
import { MdOutlinePrint } from "react-icons/md";

function PrintButton() {
  const print = () => {};
  return (
    <div
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="hover:bg-[var(--color-red)] text-[var(--color-red)] rounded-md border-[var(--color-red)] border-2 px-6 py-1 hover:text-white transition-all ease-in-out duration-500 focus:ring-4 shadow-md focus:ring-[var(--color-red)] grid place-content-center"
    >
      <div onClick={print}>
        <div className="inline-block mr-2">
          <MdOutlinePrint size={`1rem`} className="grid place-content-center" />
        </div>
        <div className="inline-block">
          <span>Print</span>
        </div>
      </div>
    </div>
  );
}

export default PrintButton;
