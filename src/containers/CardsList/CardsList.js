import React, { useState } from 'react';
import CardsListFilter from '../../components/CardsListFilter/CardsListFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import Card from '../Card';

const CardsList = ({ data, isTopics = false, isEvents = false, isPolls = false }) => {
  const [showOpen, setShowOpen] = useState(true);
  const [isCompleteOpen, setCompleteOpen] = useState(false);
  const [isFailedOpen, setFailedOpen] = useState(false);
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
      : (cardsSet = isCompleteOpen
          ? data.filter((x) => {
              return isPolls
                ? x.date.getTime() < new Date().getTime() &&
                    x.userAmount * x.quorum <= x.pollData.results.reduce((ac, cur) => ac + cur)
                : x.date.getTime() < new Date().getTime();
            })
          : (cardsSet = isFailedOpen
              ? data.filter((x) => {
                  return isPolls
                    ? x.date.getTime() < new Date().getTime() &&
                        x.userAmount * x.quorum > x.pollData.results.reduce((ac, cur) => ac + cur)
                    : null;
                })
              : null));
    cardsSet = cardsSet.sort((x, y) => x.date.getTime() - y.date.getTime());
  } else {
    cardsSet = data.sort((x, y) => y.date.getTime() - x.date.getTime());
  }
  const tagList = cardsSet.map((x) => x.tags).flat();
  return (
    <>
      <div className="section pb-5">
        <div className="box">
          <div className="tabs mb-2">
            {isEvents || isPolls ? (
              <ul className="is-left">
                <li className={showOpen ? 'is-active' : ''}>
                  <a
                    onClick={() => {
                      setShowOpen(true);
                      setCompleteOpen(false);
                      setFailedOpen(false);
                    }}
                  >
                    {isPolls ? 'Открытые' : 'Грядущие'}
                  </a>
                </li>
                <li className={isCompleteOpen ? 'is-active' : ''}>
                  <a
                    onClick={() => {
                      setShowOpen(false);
                      setCompleteOpen(true);
                      setFailedOpen(false);
                    }}
                  >
                    Завершенные
                  </a>
                </li>
                {isPolls ? (
                  <li className={isFailedOpen ? 'is-active' : ''}>
                    <a
                      onClick={() => {
                        setShowOpen(false);
                        setCompleteOpen(false);
                        setFailedOpen(true);
                      }}
                    >
                      Несостоявшиеся
                    </a>
                  </li>
                ) : null}
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
          {showOpen ? (
            <Card
              id="new"
              header={<FontAwesomeIcon className="aria-hidden" size="2x" icon={faPlusSquare} />}
              isNew
              onClick={() => history.push(`${window.location.pathname}/new`)}
            />
          ) : (
            ''
          )}
          {applyFilters(cardsSet).map((x, i) => (
            <Card
              key={i}
              {...x}
              isTopic={isTopics}
              isEvent={isEvents}
              isPoll={isPolls}
              onClick={() => history.push(`${window.location.pathname}/${x.id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsList;
