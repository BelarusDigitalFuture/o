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
        return form.setFieldValue(field.name, option ? option.value : '');
      };
  const defaultTagOptions = form.initialValues.tags.map((e) => {
    return { label: e, value: e };
  });

  return (
    <div className="field">
      <label className="label">{label}</label>
      <Select
        selectedValue={options ? options.find((option) => option.value === field.value) : ''}
        isClearable={true}
        options={options}
        defaultValue={[...defaultTagOptions]}
        name={field.name}
        isMulti={isMulti}
        value={options ? options.find((option) => option.value.toString() === field.value) : ''}
        onChange={onChange}
        onBlur={field.onBlur}
      />
    </div>
  );
};

export default SelectField;
