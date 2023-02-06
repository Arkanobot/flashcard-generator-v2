import React from "react";
import { FieldArray, Field } from "formik";

export default function Terms(props) {
  return (
    <FieldArray
      name="friends"
      render={(arrayHelpers) => (
        <div>
          {props.values.friends && props.values.friends.length > 0 ? (
            props.values.friends.map((terms, index) => (
              <div key={index}>
                <Field name={`friends.${index}`} />
                <button
                  type="button"
                  onClick={index > 0 ? () => arrayHelpers.remove(index) : null} // remove a friend from the list
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => arrayHelpers.insert(index + 1, "")} // insert an empty string at a position
                >
                  +
                </button>
              </div>
            ))
          ) : (
            <button type="button" onClick={() => arrayHelpers.push("")}>
              {/* show this when user has removed all friends from the list */}
              Add a friend
            </button>
          )}
        </div>
      )}
    />
  );
}
