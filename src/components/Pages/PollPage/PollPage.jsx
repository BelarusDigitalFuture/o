import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import GenericPage from '../GenericPage/GenericPage';
import { useParams, useHistory } from 'react-router-dom';
import { PollsContext, TopicsContext } from '../../../shared/state';
import { DetailAttribute, Tags } from '../../../containers/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
  faUser,
  faCalendar,
  faTags,
  faEnvelopeOpenText,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { setFlourishScript } from '../../../shared/service';
import chart from './poll-results.png';
import { isPollOpened, isPollCompleted } from '../../../shared/state/polls';

const types = {
  OPEN: 'open',
  SUCCESS: 'success',
  FAILED: 'failed',
};

const typesData = {
  [types.OPEN]: { color: 'has-background-warning-light', text: 'Открытое' },
  [types.SUCCESS]: { color: 'has-background-primary-light', text: 'Завершенное' },
  [types.FAILED]: { color: 'has-background-danger has-text-light', text: 'Несостоявшееся' },
};

const isOfficial = (tags) => tags.includes('официально');
const getType = (poll) => {
  const { pollData, quorum, userAmount, date } = poll;
  if (isPollOpened(poll.date)) return types.OPEN;
  if (isPollCompleted({ pollData, quorum, userAmount, date })) return types.SUCCESS;
  return types.FAILED;
};

const RadioChoice = ({ text, disabled, onSelected }) => {
  return (
    <label className="radio" style={{ width: '100%' }}>
      <input type="radio" name="answer" disabled={disabled} onChange={onSelected} />
      <span className="ml-2">{text}</span>
    </label>
  );
};

const CheckboxChoice = ({ text, disabled, onSelected }) => {
  return (
    <label className="checkbox mr-2" style={{ width: '100%' }}>
      <input type="checkbox" disabled={disabled} onChange={onSelected} />
      <span className="ml-2">{text}</span>
    </label>
  );
};

const OpenedPoll = ({ pollData, isAccept, isRadio, isUserVoted, votedChangeHandler }) => {
  const [selectedChoice, selectChoice] = useState(null);
  return (
    <section className="section p-0 has-background-link-light">
      <div className="panel-heading">
        <h3 className="panel-title">Голосование</h3>
      </div>
      <div>
        <h3 className="panel-title p-4">{pollData.question}</h3>
      </div>
      <div className="control p-4 panel">
        {pollData.items.map((item, i) =>
          isRadio ? (
            <a className="panel-block">
              <RadioChoice
                text={item}
                key={i}
                disabled={isUserVoted}
                onSelected={(choice) => selectChoice(choice)}
              />
            </a>
          ) : (
            <a className="panel-block">
              <CheckboxChoice
                text={item}
                key={i}
                disabled={isUserVoted}
                onSelected={(choice) => selectChoice(choice)}
              />
            </a>
          ),
        )}
      </div>
      <footer className="card-footer">
        <button
          className="button mt-2"
          onClick={votedChangeHandler}
          disabled={isUserVoted || !selectedChoice}
        >
          Голосовать
        </button>
      </footer>
    </section>
  );
};

const NotOpenedPoll = ({ resultSummaryMode, pollData, quorum, tags, switchResultMode }) => {
  return (
    <section className="section p-0 has-background-link-light">
      {' '}
      {resultSummaryMode && (
        <div className="panel-heading">
          <h3 className="panel-title">Результаты голосования</h3>
        </div>
      )}
      {!resultSummaryMode && (
        <div>
          <button className="button" onClick={switchResultMode}>
            <FontAwesomeIcon className="icon" size={'xs'} icon={faArrowLeft} />
            <span>Основные результаты</span>
          </button>
        </div>
      )}
      {resultSummaryMode && (
        <>
          <div>
            <h3 className="panel-title p-4">{pollData.question}</h3>
          </div>
          <div className="control p-4">
            {pollData.items.map((x, i) => (
              <h3 className="panel-title" key={i}>
                {x}:{' '}
                <span className="is-size-5 has-text-weight-medium pl-2">{pollData.results[i]}</span>
              </h3>
            ))}
          </div>
          <button className="button" onClick={switchResultMode}>
            <span>Подробные результаты</span>
            <FontAwesomeIcon className="icon" size={'xs'} icon={faArrowRight} />
          </button>
        </>
      )}
      <div className={`${resultSummaryMode && 'is-hidden'}`}>
        <img src={chart} />
      </div>
      {isOfficial(tags) ? (
        <p className="subtitle is-7 p-3">Проголосовало менее {quorum * 100}% жильцов</p>
      ) : null}
    </section>
  );
};

const PollPage = () => {
  const { pollId } = useParams();
  const { polls, dispatch } = useContext(PollsContext);
  const history = useHistory();
  const poll = polls.find((x) => x.id.toString() === pollId);
  if (!poll) {
    return <GenericPage />;
  }
  const { header, date, author, text, isRadio, tags, pollData, quorum, isUserVoted, id } = poll;

  const votedChangeHandler = () => {
    if (isUserVoted) {
      return;
    } else {
      dispatch({ type: 'CHECK_USER_VOTED', payload: id });
    }
  };

  const type = getType(poll);
  const { topics } = useContext(TopicsContext);
  const topic = topics.find((topic) => topic.id === pollData?.discussionId);

  const [resultSummaryMode, setResultSummaryMode] = useState(true);
  const switchResultMode = () => {
    if (resultSummaryMode) {
      setFlourishScript();
    }
    setResultSummaryMode(!resultSummaryMode);
  };

  return (
    <GenericPage header={header}>
      <div className={'card'}>
        <DetailAttribute>
          <div className="is-flex is-align-items-center">
            <span className={`tag ${typesData[type].color}`}>{typesData[type].text}</span>
            {topic && (
              <button
                className="ml-5 button is-small"
                onClick={() => history.push(`/discussions/${topic.id}`)}
              >
                <span className="mr-2">Перейти к обсуждению</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            )}
            {!topic && <span className="ml-5 tag is-light">{'Обсуждение не создавалось'}</span>}
          </div>
        </DetailAttribute>
        <DetailAttribute icon={faUser}>{author}</DetailAttribute>
        <DetailAttribute icon={faCalendar}>{date.toLocaleDateString()}</DetailAttribute>
        <DetailAttribute icon={faTags}>
          <Tags tags={tags} />
        </DetailAttribute>
        <hr />
        <DetailAttribute icon={faEnvelopeOpenText}>{text}</DetailAttribute>
        {isOfficial(tags) && (
          <DetailAttribute icon={faExclamation}>
            <div className="subtitle is-7 has-text-info">{`Для того, чтобы голосование состоялось, должны проголосовать ${
              quorum * 100
            }% жильцов`}</div>
          </DetailAttribute>
        )}
        <div className="mx-4 my-4 py-4">
          {type === types.OPEN ? (
            <OpenedPoll
              pollData={pollData}
              isRadio={isRadio}
              isUserVoted={isUserVoted}
              votedChangeHandler={votedChangeHandler}
            />
          ) : (
            <NotOpenedPoll
              resultSummaryMode={resultSummaryMode}
              pollData={pollData}
              tags={tags}
              quorum={quorum}
              switchResultMode={switchResultMode}
            ></NotOpenedPoll>
          )}

          {isUserVoted ? (
            <span className="has-text-weight-medium is-size-4">Ваш голос зачтен!</span>
          ) : null}
          {type === types.FAILED ? (
            <footer className="card-footer">
              <a
                style={{ height: 'auto', whiteSpace: 'normal' }}
                className="button mt-2"
                onClick={() => {
                  history.push({
                    pathname: '/polls/new',
                    state: poll,
                  });
                }}
              >
                Создать голосование повторно
              </a>
            </footer>
          ) : null}
        </div>
      </div>
    </GenericPage>
  );
};
export default PollPage;
