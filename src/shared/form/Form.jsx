import React from 'react';
import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const AppForm = ({ initial, validationSchema, onSubmit, buttonText = 'Создать', children }) => {
  return (
    <>
      <Formik initialValues={initial} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          {children}
          <button className="button is-success" type="submit">
            <span className="icon is-small">
              <FontAwesomeIcon className="aria-hidden" icon={faCheck} />
            </span>
            <span>{buttonText}</span>
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AppForm;
