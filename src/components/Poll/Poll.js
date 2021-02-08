import React from 'react';

const Poll = ({ header, open, isAccepted, author, datetimeTo }) => {
  let color;
  if (open) {
    color = 'has-background-warning-light';
  } else {
    if (isAccepted) {
      color = 'has-background-primary-light';
    } else {
      color = 'has-background-danger-light';
    }
  }
  //TODO заменить текст на props когда придет реальные данные
  return (
    <div className={'card mt-2 ' + color}>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{header}</p>
            <p className="subtitle is-6">Автор: Иванов Иван{author}</p>
            <span className="tag is-info is-light">Ремонт</span>
            <p className="subtitle is-7">Дата окончания : 1 Jan 2016 {datetimeTo}</p>
          </div>
        </div>
        <footer className="card-footer">
          <a className={'button mt-2 ' + color}>Открыть</a>
        </footer>
      </div>
    </div>
  );
};

export default Poll;
