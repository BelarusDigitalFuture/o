import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import CardsListFilter from '../CardsListFilter/CardsListFilter';

const DUMMY_DATA = [
  {
    header: 'Заголовок 1',
    text: 'text text text',
    creator: 'Jabba the Hutt',
    date: '2021-02-02 @ 13:32',
  },
];

const CardsList = (props) => {
  const filterChangeHandler = (event) => {
    const input = event.target.value;
    this.setState({ headerFilter: input });
  };

  return (
    <>
      <CardsListFilter onFilterChange={filterChangeHandler()} />
      <Cards />
    </>
  );
};

export default CardsList;
