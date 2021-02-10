import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import GenericPage from '../GenericPage/GenericPage';
import { useParams, useHistory } from 'react-router-dom';
import { PollsContext } from '../../../shared/state';

const PollPage = () => {
  const [isAccept, setAccept] = useState(false);
  const onAccept = () => {
    setAccept(true);
  };
  const { pollId } = useParams();
  const { polls } = useContext(PollsContext);
  const poll = polls.find((x) => x.id.toString() === pollId);
  if (!poll) {
    return <GenericPage />;
  }
  const { header, date, author, text, isRadio, tags, pollData } = poll;
  const isOpen = date.getTime() >= new Date().getTime();
  const isSuccess = pollData.results.some((x) => x > 50);
  const history = useHistory();

  let color = isOpen
    ? 'has-background-warning-light'
    : isSuccess
    ? 'has-background-danger-light'
    : 'has-background-primary-light';
  return (
    <GenericPage>
      {' '}
      <>
        <div className={'card mt-2 ' + color}>
          <div className="card-content">
            <div className="media mb-2">
              <div className="media-content">
                <p className="title is-4 mb-2">{header}</p>
                <div className="mb-2">
                  <p className="subtitle is-6">Автор: {author}</p>
                </div>
                {tags.map((x, i) => (
                  <span key={i} className="tag is-info is-light mr-1">
                    #{x}
                  </span>
                ))}
                <p className="subtitle is-7 mt-2 mb-2">
                  Дата окончания : {date.toLocaleDateString()}
                </p>
                {pollData.discussionId ? (
                  <a onClick={() => history.push(`/discussions/${pollData.discussionId}`)}>
                    Открыть обсуждение
                  </a>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="content">
              <hr />
              {text}
            </div>
            {isOpen ? (
              <section className="section p-0 has-background-link-light">
                <div className="panel-heading">
                  <h3 className="panel-title">Голосование</h3>
                </div>
                {isRadio ? (
                  <>
                    <div>
                      <h3 className="panel-title p-4">{pollData.question}</h3>
                    </div>
                    <div className="control p-4">
                      {pollData.items.map((x, i) => (
                        <label className="radio" key={i}>
                          <input type="radio" name="answer" disabled={isAccept} />
                          {x}
                        </label>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className="panel-title p-4">{pollData.question}</h3>
                    </div>
                    <div className="control p-4">
                      {pollData.items.map((e, i) => {
                        return (
                          <React.Fragment key={i}>
                            <label className="checkbox mr-2">
                              <input type="checkbox" className="mr-2" disabled={isAccept} />
                              {e}
                            </label>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </>
                )}
              </section>
            ) : null}
            {isOpen ? (
              <footer className="card-footer">
                <a className="button mt-2" onClick={onAccept}>
                  Голосовать
                </a>
              </footer>
            ) : (
              <>
                <section className="section p-0 has-background-link-light">
                  {' '}
                  <div className="panel-heading">
                    <h3 className="panel-title">Результаты голосования</h3>
                  </div>
                  <div>
                    <h3 className="panel-title p-4">{pollData.question}</h3>
                  </div>
                  <div className="control p-4">
                    {pollData.items.map((x, i) => (
                      <h3 className="panel-title" key={i}>
                        {x}:{' '}
                        <span className="is-size-5 has-text-weight-medium pl-2">
                          {pollData.results[i]}
                        </span>
                      </h3>
                    ))}
                  </div>
                </section>
              </>
            )}

            {isAccept ? (
              <span className="has-text-weight-medium is-size-4">Ваш голос зачтен!</span>
            ) : null}
          </div>
        </div>
      </>
    </GenericPage>
  );
};
export default PollPage;
