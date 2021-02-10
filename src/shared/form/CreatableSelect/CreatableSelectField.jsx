import React from 'react';
import CreatableSelect from 'react-select/creatable';

const CreatableSelectField = ({ options = [], field, form, isMulti, label }) => (
  <div className="field">
    <label className="label">{label}</label>
    <CreatableSelect
      options={options}
      name={field.name}
      isMulti={isMulti}
      // value={options ? options.find((option) => option.value === field.value) : ''}
      onChange={(option) => {
        return form.setFieldValue(
          field.name,
          option.map((x) => x.value),
        );
      }}
      onBlur={field.onBlur}
    />
  </div>
);

export default CreatableSelectField;
