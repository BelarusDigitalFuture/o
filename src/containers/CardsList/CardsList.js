import React, { useState } from 'react';
import CardsListFilter from '../../components/CardsListFilter/CardsListFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Poll from '../Poll';

const CardsList = ({ data }) => {
  const [showOpen, setShowOpen] = useState(true);
  const [isFilterShowed, setIsFilterShowed] = useState(false);
  const [filterHeaderString, setFilterHeaderString] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterTags, setFilterTags] = useState([]);

  const applyFilters = (cardsSet) =>
    cardsSet.filter(
      (x) =>
        x.header.toLowerCase().includes(filterHeaderString.toLowerCase()) &&
        filterTags.every((el) => x.tags.includes(el.value)) &&
        (filterDate ? filterDate.getTime() === x.date.getTime() : true),
    );

  const cardsSet = showOpen
    ? data.filter((x) => x.date.getTime() >= new Date().getTime())
    : data.filter((x) => x.date.getTime() < new Date().getTime());
  const tagList = cardsSet.map((x) => x.tags).flat();
  console.log(cardsSet);

  return (
    <>
      <div className="section pb-5">
        <div className="box">
          <div className="tabs mb-2">
            <ul>
              <li className={showOpen ? 'is-active' : ''}>
                <a onClick={() => setShowOpen(true)}>Открытые</a>
              </li>
              <li className={showOpen ? '' : 'is-active'}>
                <a onClick={() => setShowOpen(false)}>Завершенные</a>
              </li>
            </ul>

            <div className="is-right">
              <li className={showOpen ? '' : 'is-active'}>
                <a
                  style={{ display: 'inline-block' }}
                  onClick={() => setIsFilterShowed(!isFilterShowed)}
                >
                  <span className="icon is-small">
                    <FontAwesomeIcon className="aria-hidden" icon={faSearch} />
                  </span>
                </a>
              </li>
            </div>
          </div>

          <div className={isFilterShowed ? '' : 'is-hidden'}>
            <CardsListFilter
              onFilterHeaderChange={(event) => setFilterHeaderString(event.target.value)}
              onFilterDateChange={(date) => {
                setFilterDate(date);
              }}
              dateSelected={filterDate}
              datesHighlighted={cardsSet.map((x) => x.date)}
              tags={tagList}
              onTagsChange={(tags) => {
                setFilterTags(tags);
              }}
            />
          </div>

          {applyFilters(cardsSet).map((x, i) => (
            <Poll key={i} {...x} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsList;
