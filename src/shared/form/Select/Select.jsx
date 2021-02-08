import React from 'react';
import { FieldProps } from 'formik';
import Select, { Option, ReactSelectProps } from 'react-select';

const SelectField = ({ options, field, form, isMulti, label }) => (
  <div className="field">
    <label className="label">{label}</label>
    <Select
      options={options}
      name={field.name}
      isMulti={isMulti}
      value={options ? options.find((option) => option.value === field.value) : ''}
      onChange={(option) => {
        return form.setFieldValue(field.name, option.value);
      }}
      onBlur={field.onBlur}
    />
  </div>
);

export default SelectField;
