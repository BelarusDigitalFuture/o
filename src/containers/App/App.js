// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Menu from '../../components/Menu';
import MainPage from '../../components/MainPage';
import MyData from '../../components/MyData';
// import Polls from '../Polls';
import Events from '../../components/Events';
import Discussions from '../../components/Discussions';
import CardsList from '../CardsList/CardsList';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const DUMMY_POLLS = [
  {
    header: 'Меняем унитазы',
    date: new Date(2021, 1, 27),
    author: 'Василий Пушкин',
    text: 'Господа, унитазы в наших домах уже поизносились, нужны бы новые. Голосуем!',
    isRadio: true,
    tags: ['официально', 'ремонт'],
    pollData: { question: 'Хотите новый унитаз?', items: ['Да', 'Нет'], result: 52 },
  },
  {
    header: 'Ремонт детской площадки',
    date: new Date(2021, 2, 31),
    author: 'Алоиза Пашкевич',
    text:
      'На новый год я пришла пьяная на площадку и сломала качели. Предлагаю вместо них установить бар с пилоном.',
    isRadio: false,
    tags: ['неофициально', 'двор', 'дети'],
    pollData: {
      question: 'Что устанавливаем?',
      items: ['Пилон', 'Бар', 'Новые качели'],
      result: 80,
    },
  },
  {
    header: 'Празднуем новый год вместе',
    date: new Date(2020, 11, 31),
    author: 'Сергей Есенин',
    text:
      'Давайте отметим новый год у нас во дворе! Я почитаю стихи, а Алоиза опять сломает качели',
    isRadio: true,
    tags: ['неофициально', 'праздник', 'дети'],
    pollData: { question: 'Придете?', items: ['Да, один', 'Да, с семьей', 'Нет'], result: 72 },
  },
  {
    header: 'А не поменять ли мне жену?',
    date: new Date(2020, 10, 1),
    author: 'Лев Толстой',
    text: 'Что-то боярыня мне моя надоела. Думаю сменить, не знаю на кого. Подскажете?',
    isRadio: true,
    tags: ['неофициально', 'семья'],
    pollData: {
      question: 'Кого выбрать?',
      items: ['Людку из третьего', 'Соседа Игоря', 'Зинку с пятого'],
      result: 14,
    },
  },
];

class App extends React.Component {
  state = {
    menuElements: [
      { name: 'Главная', url: '/' },
      { name: 'Мои данные', url: '/mydata' },
      { name: 'Голосования', url: '/polls' },
      { name: 'Встречи', url: '/events' },
      { name: 'Обсуждения', url: '/discussions' },
    ],
    activeMenuElementId: 0,
  };

  menuElementClickHandler = (id) => {
    this.setState({ activeMenuElementId: id });
  };

  render() {
    return (
      <Router>
        <div>
          <section className=" columns is-fullheight">
            <Menu
              elements={this.state.menuElements}
              activeElementId={this.state.activeMenuElementId}
              onElementClick={this.menuElementClickHandler}
            />

            <div className="container column is-10">
              <Switch>
                <Route path="/mydata">
                  <MyData />
                </Route>
                <Route path="/polls">
                  <CardsList data={DUMMY_POLLS} />
                </Route>
                <Route path="/events">
                  <Events />
                </Route>
                <Route path="/discussions">
                  <Discussions />
                </Route>
                <Route path="/">
                  <MainPage />
                </Route>
              </Switch>
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
