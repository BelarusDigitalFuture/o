import React, { useState } from 'react';
import './CardList.css';
import { useHistory } from 'react-router-dom';
import CardsListFilter from '../../components/CardsListFilter/CardsListFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

const CardsList = ({
  data,
  isTopics = false,
  isEvents = false,
  isPolls = false,
  cardComponent: CardComponent,
}) => {
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
    cardsSet = cardsSet.sort((x, y) => x.date.getTime() - y.date.getTime());
  } else {
    cardsSet = data.sort((x, y) => y.date.getTime() - x.date.getTime());
  }
  const tagList = cardsSet.map((x) => x.tags).flat();
  const history = useHistory();

  return (
    <>
      <div className="section pb-5">
        <div className="box">
          <div className="tabs mb-2">
            {isEvents || isPolls ? (
              <ul className="is-left">
                <li className={showOpen ? 'is-active' : ''}>
                  <a onClick={() => setShowOpen(true)}>{isPolls ? 'Открытые' : 'Грядущие'}</a>
                </li>
                <li className={showOpen ? '' : 'is-active'}>
                  <a onClick={() => setShowOpen(false)}>Завершенные</a>
                </li>
              </ul>
            ) : (
              <></>
            )}

            <ul className="is-right">
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
            </ul>
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
                setFilterTags(tags.map((x) => x.value));
              }}
              hasDatePicker={!isTopics}
            />
          </div>
          {applyFilters(cardsSet).map((card, i) => (
            <CardComponent
              key={i}
              {...card}
              isTopic={isTopics}
              isEvent={isEvents}
              isPoll={isPolls}
              onClick={() => history.push(`${window.location.pathname}/${card.id}`)}
            />
          ))}
          {showOpen && (
            <button
              className="button is-rounded add-button is-success"
              title="Добавить"
              onClick={() => history.push(`${window.location.pathname}/new`)}
            >
              <FontAwesomeIcon
                className="aria-hidden has-text-primary-light"
                size="lg"
                icon={faPlus}
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CardsList;
