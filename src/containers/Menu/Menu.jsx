import React, { useState } from 'react';
import Menu from '../../components/Menu';

const menuElements = [
  { name: 'Главная', url: '/' },
  { name: 'Мои данные', url: '/mydata' },
  { name: 'Голосования', url: '/polls' },
  { name: 'Встречи', url: '/events' },
  { name: 'Обсуждения', url: '/discussions' },
];

const AppMenu = () => {
  const [activeId, setActiveId] = useState(0);

  const menuElementClickHandler = (id) => {
    setActiveId(id);
  };

  return (
    <Menu
      elements={menuElements}
      activeElementId={activeId}
      onElementClick={menuElementClickHandler}
    />
  );
};

export default AppMenu;
