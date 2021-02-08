import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DiscussionTopic from '../../containers/DiscussionTopic';
import { TopicsContext } from '../../shared/state';

const Discussions = (props) => {
  const history = useHistory();
  const { topics } = useContext(TopicsContext);
  return (
    <div className="section">
      <button onClick={() => history.push('/discussions/new')}>Add</button>
      {topics.map((x) => (
        <DiscussionTopic key={x.header} header={x.header} text={x.text} comments={x.comments} />
      ))}
      {/*<DiscussionTopic />*/}
    </div>
  );
};

export default Discussions;
