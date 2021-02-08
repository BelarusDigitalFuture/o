import React from 'react';
import { Formik, Form, useField } from 'formik';

const AppForm = ({ initial, validation, onSubmit, children }) => {
  return (
    <>
      <Formik initialValues={{ initial }} validationSchema={{ validation }} onSubmit={{ onSubmit }}>
        <Form>
          {children}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default AppForm;
