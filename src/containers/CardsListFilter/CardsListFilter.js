import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CardsListFilter.css';

const TAGS = [
  { value: 'прогулка', label: 'прогулка' },
  { value: 'официальная', label: 'официальная' },
  { value: 'дети', label: 'дети' },
  { value: 'спорт', label: 'спорт' },
];

const CardsListFilter = (props) => {
  // const [selectedDate, setSelectedDate] = useState('');
  const customInput = <input className="input" type="search" />;

  return (
    <div className="box">
      <div className="columns">
        <div className="column is-three-quarters">
          <input
            type="search"
            className="input"
            placeholder="Тема"
            onChange={props.onFilterHeaderChange}
          />
        </div>
        <div className="column">
          <DatePicker
            wrapperClassName={'datePickerWrapper'}
            customInput={customInput}
            selected={props.dateSelected}
            onChange={props.onFilterDateChange}
            placeholderText="Дата"
            highlightDates={props.datesHighlighted}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column ">
          <Select options={TAGS} isMulti placeholder="Теги" onChange={props.onTagsChange} />
        </div>
      </div>
    </div>
  );
};

export default CardsListFilter;
