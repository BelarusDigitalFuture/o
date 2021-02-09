import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import GenericPage from '../GenericPage/GenericPage';
import { TopicsContext } from '../../../shared/state';
import Comment from '../../../containers/Comment/Comment';

const DiscussionPage = () => {
  const { topicId } = useParams();
  const { topics } = useContext(TopicsContext);
  const topic = topics[topicId];
  if (!topic) {
    return <GenericPage />;
  }
  const comments = topic.topicData.comments.sort((x, y) => x.date.getTime() - y.date.getTime());

  return (
    <GenericPage header={topic.header}>
      <Comment
        author={topic.author}
        date={topic.date}
        comment={topic.text}
        likes={topic.topicData.likes}
      />
      {comments.map((x, i) => (
        <Comment key={i} {...x} />
      ))}
    </GenericPage>
  );
};

export default DiscussionPage;
