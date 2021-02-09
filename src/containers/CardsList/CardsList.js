import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import CardsListFilter from '../../components/CardsListFilter/CardsListFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Poll from '../Poll';

const CardsList = ({ data, isTopics = false, isEvents = false, isPolls = false }) => {
  const [showOpen, setShowOpen] = useState(true);
  const [isFilterShowed, setIsFilterShowed] = useState(false);
  const [filterHeaderString, setFilterHeaderString] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterTags, setFilterTags] = useState([]);

  const applyFilters = (cardsSet) =>
    cardsSet.filter(
      (x) =>
        x.header.toLowerCase().includes(filterHeaderString.toLowerCase()) &&
        filterTags.every((el) => x.tags.includes(el)) &&
        (filterDate ? filterDate.getTime() === x.date.getTime() : true),
    );

  let cardsSet;
  if (isPolls || isEvents) {
    cardsSet = showOpen
      ? data.filter((x) => x.date.getTime() >= new Date().getTime())
      : data.filter((x) => x.date.getTime() < new Date().getTime());
    cardsSet = cardsSet.sort((x, y) => x.date.getDate() - y.date.getDate());
  } else {
    cardsSet = data.sort((x, y) => y.date.getDate() - x.date.getDate());
  }
  const tagList = cardsSet.map((x) => x.tags).flat();

  const history = useHistory();
  const location = useLocation();

  return (
    <>
      <button className="button" onClick={() => history.push(`${location.pathname}/new`)}>
        Add
      </button>
      <div className="section pb-5">
        <div className="box">
          {isEvents || isPolls ? (
            <div className="tabs mb-2">
              <ul>
                <li className={showOpen ? 'is-active' : ''}>
                  <a onClick={() => setShowOpen(true)}>{isPolls ? 'Открытые' : 'Грядущие'}</a>
                </li>
                <li className={showOpen ? '' : 'is-active'}>
                  <a onClick={() => setShowOpen(false)}>Завершенные</a>
                </li>
              </ul>

              <div className="is-right">
                <li className={isFilterShowed ? 'is-active' : ''}>
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
          ) : (
            ''
          )}

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
                setFilterTags(tags.map((x) => x.value));
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
