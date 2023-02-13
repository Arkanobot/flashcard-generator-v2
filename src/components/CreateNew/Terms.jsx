import React, { useRef } from "react";
import { FieldArray, Field, useFormikContext, ErrorMessage } from "formik";
import TermImage from "./TermImage";
import { RiDeleteBackFill, RiEditBoxLine, RiAddFill } from "react-icons/ri";

export default function Terms() {
  const formikProps = useFormikContext();
  const termNames = useRef([]);
  termNames.current = [];
  const addRef = (element) => {
    if (element && !termNames.current.includes(element)) {
      termNames.current.push(element);
    }
  };

  return (
    <FieldArray
      name="terms"
      render={(arrayHelpers) => (
        <div className="bg-white p-5 rounded-md mt-4  overflow-hidden">
          {formikProps.values.terms.map((term, index) => (
            <div
              className="md:flex md:space-x-10 md:items-center relative flex-wrap my-2"
              key={index}
            >
              <div className="md:flex md:space-x-10 relative flex-wrap">
                <div
                  className={`mt-3 grid place-content-center ${
                    term.termDef === ""
                      ? term.termImg === ""
                        ? "h-18"
                        : "h-24"
                      : "h-24"
                  }`}
                >
                  <div
                    name={`terms.${index}.id`}
                    className="bg-[var(--color-red)] px-2 rounded-full text-white"
                  >
                    {index + 1}
                  </div>
                </div>
              </div>
              <div className="md:flex md:space-x-10 md:items-center relative flex-wrap justify-between">
                <div
                  className={`flex flex-col my-2 ${
                    term.termImg === ""
                      ? term.termDef === ""
                        ? "h-18"
                        : "h-[7.5rem]"
                      : "h-[7.5rem]"
                  }`}
                >
                  <span className="font-semibold text-slate-500">
                    Term Name*
                  </span>
                  <input
                    id={`${index}`}
                    ref={addRef}
                    className={`border-slate-400 rounded-md p-2 lg:w-96 md:w-72 bg-gray-100 border text-md`}
                    placeholder="Please enter a Term Name [Max:15 Chars]"
                    name={`terms.${index}.termName`}
                    value={formikProps.values.terms[index].termName}
                    maxLength={15}
                    onChange={(e) => {
                      formikProps.setFieldValue(
                        `terms.${index}.termName`,
                        e.target.value
                      );
                    }}
                  />
                  <span className="mx-auto text-sm text-[var(--color-red)]">
                    <ErrorMessage name={`terms.${index}.termName`} />
                  </span>
                </div>
                <div className="flex flex-col my-2">
                  <span className="font-semibold text-slate-500">
                    Term Defination*
                  </span>
                  <Field
                    as="textarea"
                    maxLength={500}
                    className={`border-slate-400 rounded-md p-2 lg:w-96 md:w-72 resize-none transition-all ease-in-out bg-gray-100 border duration-300 text-md ${
                      term.termDef === ""
                        ? term.termImg === ""
                          ? "h-11"
                          : "h-24"
                        : "h-24"
                    }`}
                    placeholder="Please enter the Term Defination [Max: 500 Chars]"
                    type="text"
                    name={`terms.${index}.termDef`}
                  />
                  <span
                    className={`text-[0.70rem] text-slate-500 absolute ${
                      formikProps.values.terms[index].termDef !== ""
                        ? "top-[8.2rem]"
                        : "top-20"
                    }  duration-[250ms]`}
                  >{`Chars left: ${
                    500 - formikProps.values.terms[index].termDef.length
                  }`}</span>
                  <span className="mx-auto text-sm text-[var(--color-red)]">
                    <ErrorMessage name={`terms.${index}.termName`} />
                  </span>
                </div>

                {/*===Image Component for Term Image=== */}
                <TermImage term={term} index={index} />
              </div>
              <div className="flex sm:flex-col justify-center mt-5">
                <RiEditBoxLine
                  onClick={() => {
                    termNames.current[index].focus();
                  }}
                  size={"1.2rem"}
                  className={`cursor-pointer transition-all  ease-in-out mx-1 text-blue-500  hover:text-[var(--color-red)] my-1`}
                />
                <RiDeleteBackFill
                  size={"1.2rem"}
                  onClick={index > 0 ? () => arrayHelpers.remove(index) : null} // remove a friend from the list
                  className={`${
                    index > 0 ? null : "hidden"
                  } cursor-pointer transition-all  ease-in-out mx-1 text-red-600  hover:text-[var(--color-red)] my-1`} // does not show the remove button in case the index is 0
                />
              </div>
            </div>
          ))}
          <div
            size={"1.2rem"}
            className="cursor-pointer transition-all  ease-in-out mx-1 text-blue-500 hover:text-green-600"
            onClick={() =>
              arrayHelpers.push({
                id: formikProps.values.terms.length,
                termName: "",
                termDef: "",
                termImg: "",
              })
            } // insert a new term
          >
            <span className="font-semibold">
              <div className="flex">
                <RiAddFill className="mt-0.5 mx-1" size={"1.3rem"} /> Add Terms
              </div>
            </span>
          </div>
        </div>
      )}
    />
  );
}
