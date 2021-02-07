import React, { useState } from 'react';

const CardsListFilter = (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-item field">
        <input
          type="search"
          className="input"
          placeholder="Поиск..."
          onChange={props.onFilterChange}
        />
        {/*<span className="icon is-small is-right">*/}
        {/*  <icon />*/}
        {/*</span>*/}
      </div>
    </nav>
  );
};

export default CardsListFilter;
