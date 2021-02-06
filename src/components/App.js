// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Menu from '../containers/Menu.js';
import MainPage from "../containers/MainPage";
import MyData from "../containers/MyData";
import Polls from "./Polls";
import Events from "../containers/Events";
import Discussions from "../containers/Discussions";

class App extends React.Component {
  state = {
    menuElements: [
      {name: "Главная", link: "#", render: MainPage},
      {name: "Мои данные  ", link: "#", render: MyData},
      {name: "Голосования", link: "#", render: Polls},
      {name: "Встречи", link: "#", render: Events},
      {
        name: "Обсуждения", link: "#", render: Discussions,
        // children: [
        //     {name: "Куплю-продам", link: "#", render: Market},
        //     {name: "Стол находок", link: "#", render: LostAndFound}
        // ]
      },
    ],
    activeMenuElementId: 0,
  };

  menuElementClickHandler = id => {
    this.setState({activeMenuElementId: id});
  };

  renderActivePage() {
    const Component = this.state.menuElements[this.state.activeMenuElementId].render;
    return <Component/>;
  }

  render() {
    return (
      <div>
        <section className=" columns is-fullheight">
          <Menu
            elements={this.state.menuElements}
            activeElementId={this.state.activeMenuElementId}
            onElementClick={this.menuElementClickHandler}
          />

          <div className="container column is-10">
            {this.renderActivePage()}
          </div>

        </section>
      </div>)
  }
}

export default App;
