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
    <div className={'card mt-2 ' + color}>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.header}</p>
            <span className="tag is-info is-light">Ремонт</span>
          </div>
        </div>
        <div className="content">
          Здесь будет находиться краткое описание голосовалки, но можно и без него.
        </div>
        <table className="table is-size-7">
          <thead>
            <tr>
              <th>Дата создания</th>
              <th>Дата окончания</th>
            </tr>
          </thead>{' '}
          <tbody>
            <tr>
              <td>
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </td>
              <td>
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </td>
            </tr>
          </tbody>
        </table>
        <footer className="card-footer">
          <a className={'button mt-2 ' + color}>Открыть</a>
        </footer>
      </div>
    </div>
  );
};

export default Poll;
