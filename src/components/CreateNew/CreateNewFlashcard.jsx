import React from "react";
import Terms from "./Terms";
import { Formik, Form, Field } from "formik";

export default function CreateNewFlashcard() {
  return (
    <div className="md:mt-10 px-5 2xl:px-44 xl:px-20 my-5">
      <div>
        <h1>My Form</h1>
        <Formik
          initialValues={{ name: "jared", terms: ["1", 2, 3] }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Field
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}

              <Terms values={props.values} />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
