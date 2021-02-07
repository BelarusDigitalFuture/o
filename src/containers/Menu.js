import React from 'react';
import MenuItem from "./MenuItem";

const Menu = props => {
  return (
    <aside className="column menu is-2 is-narrow-mobile is-fullheight section">
      {/*<p className="menu-label is-hidden-touch">Navigation</p>*/}
      <ul className="menu-list">
        {props.elements.map((x, i) =>
          <MenuItem
            isActive={i === props.activeElementId}
            key={x.name}
            name={x.name}
            link={x.link}
            url={x.url}
            // children={x.children}
            onClick={() => props.onElementClick(i)}
          />
        )}
      </ul>
    </aside>
  );
}

export default Menu;