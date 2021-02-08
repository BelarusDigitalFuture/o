import React, { useState } from 'react';
import CardsListFilter from '../CardsListFilter/CardsListFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Poll from '../../components/Poll';

const OPEN_CARDS = [
  {
    header: 'Собрание жильцов №3',
    open: true,
    date: new Date('2021-02-14'),
    tags: ['официальная'],
  },
  { header: 'Лепим снеговика!', open: true, date: new Date('2021-02-11'), tags: ['дети', 'спорт'] },
];

const CLOSED_CARDS = [
  {
    header: 'Катаемся на велосипедах',
    open: false,
    isAccepted: false,
    date: new Date('2021-01-11'),
    tags: ['спорт', 'прогулка'],
  },
  {
    header: 'Выгул детей',
    open: false,
    isAccepted: true,
    date: new Date('2021-01-22'),
    tags: ['дети'],
  },
];

const CardsList = (props) => {
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
        (filterDate ? filterDate.getDate() === x.date.getDate() : true),
    );

  const setOfCards = showOpen ? OPEN_CARDS : CLOSED_CARDS;

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
              datesHighlighted={setOfCards.map((x) => x.date)}
              onTagsChange={(tags) => {
                setFilterTags(tags);
              }}
            />
          </div>

          {applyFilters(setOfCards).map((x, i) => (
            <Poll key={i} {...x} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsList;
