import React from "react";
import { useFormikContext } from "formik";
import { MdOutlineDeleteForever } from "react-icons/md";

export default function TermImage(props) {
  const formikProps = useFormikContext();

  return (
    <div>
      {props.term.termImg === "" ? (
        <label htmlFor={`img${props.index}`}>
          <div
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="mt-7 mb-[4px] border-[var(--color-red)]  border mx-auto w-32  p-2  text-[var(--color-red)] rounded-lg shadow-md hover:-translate-y-px hover:bg-[var(--color-red)] hover:text-white transition-all ease-in-out grid place-content-center font-semibold"
          >
            Select Image
          </div>
        </label>
      ) : (
        <div className="grid place-content-center md:flex  md:space-x-4 md:space-y-4 md:my-5 ">
          <div className="w-[130px] relative p-4 overflow-hidden flex">
            <MdOutlineDeleteForever
              className="absolute top-4 -right-0.5 cursor-pointer"
              color="var(--color-red)"
              size={"1.2rem"}
              onClick={() =>
                formikProps.setFieldValue(`terms[${props.index}].termImg`, "")
              }
            />
            <label htmlFor={`img${props.index}`}>
              <img
                className="border-2 border-[var(--color-red)] border-solid rounded-md min-w-[95px] min-h-[95px]  max-w-[95px] max-h-[95px]"
                src={props.term.termImg}
                alt={props.term.termName}
              />
            </label>
          </div>
        </div>
      )}
      <input
        type="file"
        name={`terms.${props.index}.termImg`}
        id={`img${props.index}`}
        className="hidden"
        onChange={(e) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(e.target.files[0]);
          fileReader.onload = () => {
            formikProps.setFieldValue(
              `terms[${props.index}].termImg`,
              fileReader.result
            );
          };
        }}
      />
    </div>
  );
}
