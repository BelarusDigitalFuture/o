import React from 'react';
import Select from 'react-select';

const SelectField = ({ options, field, form, isMulti, label }) => {
  const onChange = isMulti
    ? (option) => {
        return form.setFieldValue(
          field.name,
          option.map((x) => x.value || ''),
        );
      }
    : (option) => {
        return form.setFieldValue(field.name, '' && option.value);
      };

  return (
    <div className="field">
      <label className="label">{label}</label>
      <Select
        isClearable={true}
        options={options}
        name={field.name}
        isMulti={isMulti}
        value={options ? options.find((option) => option.value === field.value) : ''}
        onChange={onChange}
        onBlur={field.onBlur}
      />
    </div>
  );
};

export default SelectField;
