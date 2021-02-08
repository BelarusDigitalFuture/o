import React from 'react';
import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="field">
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <div className="control">
        <input className="input" {...field} {...props} />
      </div>

      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
