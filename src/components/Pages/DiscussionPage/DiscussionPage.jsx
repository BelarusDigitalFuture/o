import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import GenericPage from '../GenericPage/GenericPage';
import { TopicsContext } from '../../../shared/state';
import Comment from '../../../containers/Comment/Comment';
import TextInput from '../../../shared/form/Input/Input';
import AppForm from '../../../shared/form/Form';
import * as Yup from 'yup';

const DiscussionPage = () => {
  const { topicId } = useParams();
  const { topics } = useContext(TopicsContext);
  const { dispatch } = useContext(TopicsContext);
  const history = useHistory();

  const topic = topics.find((x) => x.id.toString() === topicId);

  if (!topic) {
    return <GenericPage />;
  }
  const comments = topic.topicData.comments.sort((x, y) => x.date.getTime() - y.date.getTime());

  return (
    <GenericPage header={topic.header}>
      <div className="field is-grouped">
        <p className="control">
          <button
            className="button is-small"
            onClick={() => {
              history.push(`/polls/new/${topicId}`);
            }}
          >
            Создать голосование
          </button>
        </p>
        <p className="control">
          <button className="button is-small">Создать встречу</button>
        </p>
      </div>

      <Comment
        author={topic.author}
        date={topic.date}
        comment={topic.text}
        likes={topic.topicData.likes}
      />
      {comments.map((x, i) => (
        <Comment key={i} {...x} />
      ))}

      <AppForm
        buttonText="Отправить"
        initial={{ comment: '' }}
        validationSchema={Yup.object({
          comment: Yup.string().required('Required'),
        })}
        onSubmit={(values) => {
          dispatch({ type: 'ADD_COMMENT', comment: { ...values, topicId: topicId } });
        }}
      >
        <TextInput label={'Ваш комментарий'} name="comment" />
      </AppForm>
    </GenericPage>
  );
};

export default DiscussionPage;
