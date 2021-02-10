import React from 'react';
import MenuItem from '../MenuItem';

const Menu = (props) => {
  return (
    <aside className="column menu-class menu is-2 is-block-mobile is-inline is-fullheight section is-static">
      <figure className="image ">
        <img src="/logo.svg" />
      </figure>
      <br />

      <ul className="menu-list">
        {props.elements.map((x, i) => (
          <MenuItem
            isActive={i === props.activeElementId}
            key={x.name}
            name={x.name}
            link={x.link}
            url={x.url}
            // children={x.children}
            onClick={() => props.onElementClick(i)}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
