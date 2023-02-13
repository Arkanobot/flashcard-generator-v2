import React from "react";
import { Formik, Form, Field } from "formik";

export default function SignIn() {
  return (
    <div className="md:mt-10 px-5 2xl:pl-44 2xl:pr-[20%] xl:px-20 my-5 grid place-content-center h-[70vh]">
      <div className="bg-white p-5 rounded-md space-y-4">
        <h1>Sign In</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className="flex flex-col">
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
