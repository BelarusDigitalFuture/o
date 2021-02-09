import React, { useState } from 'react';

const Card = ({
  header,
  date,
  author,
  tags,
  pollData,
  isTopic = false,
  isEvent = false,
  isPoll = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isOpen = date.getTime() >= new Date().getTime();
  let color = isHovered ? 'has-background-grey-lighter' : 'has-background-light';
  if (isPoll) {
    if (isOpen) {
      color = isHovered ? 'has-background-warning' : 'has-background-warning-light';
    } else {
      if (pollData.results.some((x) => x > 50)) {
        color = isHovered ? 'has-background-primary' : 'has-background-primary-light';
      } else {
        color = isHovered ? 'has-background-danger' : 'has-background-danger-light';
      }
    }
  }

  let dateText;
  if (isTopic) {
    dateText = 'Дата создания';
  }
  if (isEvent) {
    dateText = 'Дата проведения';
  }
  if (isPoll) {
    dateText = 'Дата окончания';
  }

  return (
    <div
      className={'card mt-2 ' + color}
      onClick={() => console.log('mock here')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{header}</p>
            <p className="subtitle is-7 mb-1">
              Автор: {author} | {dateText}: {date.toLocaleDateString()}
            </p>
            {tags.map((x, i) => (
              <span key={i} className="tag is-info is-light mr-1">
                #{x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;