import React, { useState } from 'react';
import Menu from '../../components/Menu';

const menuElements = [
  { name: 'Главная', url: '/' },
  { name: 'Мои данные', url: '/mydata' },
  { name: 'Обсуждения', url: '/discussions' },
  { name: 'Голосования', url: '/polls' },
  { name: 'Встречи', url: '/events' },
  { name: 'Документы', url: '/docs' },
  { name: 'Контакты', url: '/contacts' },
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
