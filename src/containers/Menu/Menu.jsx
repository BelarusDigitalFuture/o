import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Menu.css';
import Menu from '../../components/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

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
  const history = useHistory();
  const currentUrl = '/' + history.location.pathname.split('/')[1];
  const [activeId, setActiveId] = useState(menuElements.findIndex((x) => x.url === currentUrl));
  const [mobileOpened, setMobileOpened] = useState(false);

  const menuElementClickHandler = (id) => {
    setMobileOpened(false);
    setActiveId(id);
  };

  return (
    <>
      <a
        role="button"
        className={`navbar-burger app-navbar-burger ${mobileOpened ? 'is-active' : ''}`}
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        onClick={() => setMobileOpened(!mobileOpened)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <aside className="column menu-class menu is-2 is-block-mobile is-inline is-fullheight section is-static is-hidden-touch	">
        <Menu
          elements={menuElements}
          activeElementId={activeId}
          onElementClick={menuElementClickHandler}
        />
      </aside>
      <div className={`modal is-hidden-desktop ${mobileOpened ? 'is-active' : ''}`}>
        <div className="modal-background has-background-white"></div>
        <div className="modal-content is-fullheight modal-menu-content">
          <Menu
            elements={menuElements}
            activeElementId={activeId}
            onElementClick={menuElementClickHandler}
          />
        </div>
        <button
          className="modal-close is-large is-dark delete modal-menu-close has-background-primary"
          aria-label="close"
          onClick={() => setMobileOpened(false)}
        ></button>
      </div>
    </>
  );
};

export default AppMenu;
