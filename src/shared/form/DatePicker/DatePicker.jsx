import React from 'react';
import DatePicker from 'react-datepicker';

const DatePickerField = ({ options, field, form, label, customInput }) => (
  <div className="field">
    <label className="label">{label}</label>
    <DatePicker
      options={options}
      name={field.name}
      selected={(field.value && new Date(field.value)) || null}
      customInput={customInput}
      onChange={(option) => {
        console.log('DP changed', option);
        return form.setFieldValue(field.name, option);
      }}
      onBlur={field.onBlur}
    />
  </div>
);

export default DatePickerField;
