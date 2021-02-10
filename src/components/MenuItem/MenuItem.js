import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  return (
    <li className={'pl-3 ' + (props.isActive ? 'active-item-padding' : '')}>
      <Link
        className={props.isActive ? 'is-active pl-4' : ''}
        to={props.url}
        onClick={props.onClick}
      >
        {props.name}
      </Link>
    </li>
  );
};

export default MenuItem;
