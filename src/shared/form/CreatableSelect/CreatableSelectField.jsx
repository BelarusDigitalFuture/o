import React from 'react';
import CreatableSelect from 'react-select/creatable';

const CreatableSelectField = ({ options = [], field, form, isMulti, label }) => {
  const defaultItemOptions = form.initialValues.items.map((e) => {
    return { label: e, value: e };
  });
  return (
    <div className="field">
      <label className="label">{label}</label>
      <CreatableSelect
        options={options}
        defaultValue={[...defaultItemOptions]}
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
};

export default CreatableSelectField;
