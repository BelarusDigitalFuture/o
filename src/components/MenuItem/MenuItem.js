import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  return (
    <li>
      <Link className={props.isActive ? 'is-active' : ''} to={props.url} onClick={props.onClick}>
        {props.name}
      </Link>
    </li>
  );
};

export default MenuItem;
