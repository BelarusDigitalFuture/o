// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Menu from '../containers/Menu.js';
import MainPage from "../containers/MainPage";
import MyData from "../containers/MyData";
import Polls from "./Polls";
import Events from "../containers/Events";
import Discussions from "../containers/Discussions";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component {
  state = {
    menuElements: [
      {name: "Главная", link: "#", render: MainPage, url: "/"},
      {name: "Мои данные", link: "#", render: MyData, url: "/mydata"},
      {name: "Голосования", link: "#", render: Polls, url: "/polls"},
      {name: "Встречи", link: "#", render: Events, url: "/events"},
      {name: "Обсуждения", link: "#", render: Discussions, url: "/discussions"},
    ],
    activeMenuElementId: 0,
  };

  menuElementClickHandler = id => {
    this.setState({activeMenuElementId: id});
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
                  <Polls />
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
    )
  }
}

export default App;
