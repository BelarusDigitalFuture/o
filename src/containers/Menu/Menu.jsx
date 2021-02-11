import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '../../components/Menu';

const menuElements = [
  { name: 'Главная', url: '/' },
  { name: 'Мои данные', url: '/mydata' },
  { name: 'Обсуждения', url: '/discussions' },
  { name: 'Голосования', url: '/polls' },
  { name: 'Встречи', url: '/events' },
];

const AppMenu = () => {
  const history = useHistory();
  const currentUrl = '/' + history.location.pathname.split('/')[1];
  const [activeId, setActiveId] = useState(menuElements.findIndex((x) => x.url === currentUrl));

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
