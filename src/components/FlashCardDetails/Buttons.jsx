import React from "react";
import ShareButton from "./Buttons/ShareButton";
import PrintButton from "./Buttons/PrintButton";
import DownloadButton from "./Buttons/DownloadButton";

export default function Buttons() {
  return (
    <div>
      <div className="min-w-[150px]  max-w-[300px] p-4 pt-0 rounded-md grid place-content-center md:absolute md:bottom-0 xl:relative">
        <div className="flex flex-col space-y-4 font-semibold">
          <div className="bg-white">
            <ShareButton />
          </div>
          <div className="bg-white">
            <PrintButton />
          </div>
          <div className="bg-white">
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  );
}
