import React from 'react';
import Poll from '../containers/Poll';

const OPEN_POLLS = [
  { header: 'Ремонт детской площадки', open: true },
  { header: 'Коллективная масленица', open: true },
];

const CLOSED_POLLS = [
  { header: 'Замена лифтов', open: false, isAccepted: false },
  { header: 'Замена почтовых ящиков', open: false, isAccepted: true },
];

class Polls extends React.Component {
  state = {
    openShowed: true,
  };

  switchViewHandler = () => {
    this.setState({ openShowed: !this.state.openShowed });
  };

  render() {
    let pollsToShow;
    if (this.state.openShowed) {
      pollsToShow = OPEN_POLLS.map((x, i) => <Poll key={i} {...x} />);
    } else {
      pollsToShow = CLOSED_POLLS.map((x, i) => <Poll key={i} {...x} />);
    }

    return (
      <div className="section pb-5">
        <div className="box">
          <div className="tabs">
            <ul>
              <li className={this.state.openShowed ? 'is-active' : ''}>
                <a onClick={this.switchViewHandler}>Открытые</a>
              </li>
              <li className={this.state.openShowed ? '' : 'is-active'}>
                <a onClick={this.switchViewHandler}>Завершенные</a>
              </li>
            </ul>
          </div>
          {pollsToShow}
        </div>
      </div>
    );
  }
}

export default Polls;
