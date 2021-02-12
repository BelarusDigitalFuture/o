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
  hasDatePicker = true,
}) => {
  const customInput = <input className="input" type="search" />;

  const uniqueTags = tags.filter((val, ind, self) => self.indexOf(val) === ind);

  return (
    <div className="box">
      <div className="columns">
        <div className={'column ' + (hasDatePicker ? 'is-three-quarters' : '')}>
          <input
            type="search"
            className="input"
            placeholder="Тема"
            onChange={onFilterHeaderChange}
          />
        </div>
        <div className={'column ' + (hasDatePicker ? '' : 'is-hidden')}>
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
            options={uniqueTags.map((x) => ({ label: `#${x}`, value: x }))}
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
