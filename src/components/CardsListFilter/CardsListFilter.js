import React from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CardsListFilter.css';

const CardsListFilter = ({
  tags,
  onFilterHeaderChange,
  onTagsChange,
  datesHighlighted,
  onFilterDateChange,
  dateSelected,
}) => {
  const customInput = <input className="input" type="search" />;

  return (
    <div className="box">
      <div className="columns">
        <div className="column is-three-quarters">
          <input
            type="search"
            className="input"
            placeholder="Тема"
            onChange={onFilterHeaderChange}
          />
        </div>
        <div className="column">
          <DatePicker
            wrapperClassName={'datePickerWrapper'}
            customInput={customInput}
            selected={dateSelected}
            onChange={onFilterDateChange}
            placeholderText="Дата"
            highlightDates={datesHighlighted}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column ">
          <Select
            options={tags.map((x) => ({ label: `#${x}`, value: x }))}
            isMulti
            placeholder="Теги"
            onChange={onTagsChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CardsListFilter;
