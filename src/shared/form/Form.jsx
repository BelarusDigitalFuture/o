import React from 'react';
import { Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const AppForm = ({ buttonText = 'Создать', children }) => {
  return (
    <>
      <Form>
        {children}
        <button className="button is-success" type="submit">
          <span className="icon is-small">
            <FontAwesomeIcon className="aria-hidden" icon={faCheck} />
          </span>
          <span>{buttonText}</span>
        </button>
      </Form>
    </>
  );
};

export default AppForm;
