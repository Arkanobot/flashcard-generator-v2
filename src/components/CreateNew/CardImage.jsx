import React from "react";
import { useFormikContext, ErrorMessage } from "formik";
import { MdOutlineDeleteForever, MdUploadFile } from "react-icons/md";

export default function CardImage() {
  const formikProps = useFormikContext();
  return (
    <div>
      {formikProps.values.cardImg === "" ? (
        <label htmlFor={`cardImg`}>
          <div className="mt-6 border-[var(--color-red)]  border w-42  p-2  text-[var(--color-red)] rounded-lg shadow-md hover:-translate-y-px hover:bg-[var(--color-red)] hover:text-white transition-all ease-in-out grid place-content-center font-semibold">
            <div>
              <div className="inline-block ml-3">
                <MdUploadFile />
              </div>
              <span className="mx-3">Upload Image</span>
            </div>
          </div>
          <div className="grid place-content-center text-sm text-[var(--color-red)]">
            <ErrorMessage name={`cardImg`} />
          </div>
        </label>
      ) : (
        <div className="grid place-content-center md:flex  md:space-x-4 md:space-y-4 md:my-5">
          <div className="w-[130px] relative px-4 overflow-hidden flex">
            <MdOutlineDeleteForever
              className="absolute top-0 -right-1.5 text-[var(--color-red)] cursor-pointer "
              size={"1.8rem"}
              onClick={() => formikProps.setFieldValue(`cardImg`, "")}
            />
            <label htmlFor={`cardImg`}>
              <img
                className="border-2 border-[var(--color-red)] border-solid rounded-md min-w-[95px] min-h-[95px]  max-w-[95px] max-h-[95px]"
                src={formikProps.values.cardImg}
                alt={formikProps.values.cardImg}
              />
            </label>
          </div>
        </div>
      )}
      <input
        type="file"
        name={`cardImg`}
        id={`cardImg`}
        className="hidden"
        onChange={(e) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(e.target.files[0]);
          fileReader.onload = () => {
            formikProps.setFieldValue(`cardImg`, fileReader.result);
          };
        }}
      />
    </div>
  );
}
