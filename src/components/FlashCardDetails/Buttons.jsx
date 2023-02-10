import React from "react";
import ShareButton from "./Buttons/ShareButton";
import PrintButton from "./Buttons/PrintButton";
import DownloadButton from "./Buttons/DownloadButton";

export default function Buttons() {
  return (
    <div>
      <div className="bg-white min-w-[150px]  max-w-[300px] shadow-md p-4 rounded-md grid place-content-center md:absolute md:left-10 md:bottom-0 xl:relative">
        <div className="flex flex-col space-y-4 font-semibold">
          <div>
            <ShareButton />
          </div>
          <div>
            <PrintButton />
          </div>
          <div>
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  );
}
