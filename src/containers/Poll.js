import React from 'react';

const Poll = (props) => {
  let color;
  if (props.open) {
    color = 'has-background-warning-light';
  } else {
    if (props.isAccepted) {
      color = 'has-background-primary-light';
    } else {
      color = 'has-background-danger-light';
    }
  }

  return (
    <>
      <div className="tile is-parent is-vertical">
        <article className={'tile is-child notification ' + color}>
          <nav className="level">
            <div className="level-left level-item">
              <p className="is-size-3">{props.header}</p>
            </div>
            <div className="level-right">
              <div className="level-item ">
                <a className={'button ' + color}>Открыть</a>
              </div>
            </div>
          </nav>
        </article>
      </div>
    </>
  );
};

export default Poll;
