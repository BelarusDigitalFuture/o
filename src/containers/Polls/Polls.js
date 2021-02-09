import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Poll from '../../components/Poll';
import { PollsContext } from '../../shared/state';

const renderPolls = (pollData) => {
  return pollData.map((x, i) => <Poll key={i} {...x} />);
};

const Polls = () => {
  const [openShowed, setOpenShowed] = useState(true);
  const history = useHistory();
  const switchViewHandler = () => setOpenShowed(!openShowed);
  const { polls } = useContext(PollsContext);

  const pollsToShow = polls.filter((poll) => poll.open === openShowed);

  return (
    <div className="section pb-5">
      <button className="button" onClick={() => history.push('/polls/new')}>
        Add
      </button>
      <div className="box">
        <div className="tabs">
          <ul>
            <li className={openShowed ? 'is-active' : ''}>
              <a onClick={() => switchViewHandler()}>Открытые</a>
            </li>
            <li className={openShowed ? '' : 'is-active'}>
              <a onClick={() => switchViewHandler()}>Завершенные</a>
            </li>
          </ul>
        </div>
        {renderPolls(pollsToShow)}
      </div>
    </div>
  );
};

export default Polls;
