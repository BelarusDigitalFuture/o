import React, { useState } from 'react';
import './Card.css';

<<<<<<< HEAD
const Card = ({ baseColorClassName = '', children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const clickableProps = onClick
    ? {
        onClick,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
=======
const Card = ({
  id,
  header,
  date = new Date(),
  author = '',
  tags = '',
  pollData = {},
  isTopic = false,
  isEvent = false,
  isPoll = false,
  isNew = false,
  userAmount,
  quorum,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();
  const { results = [] } = pollData;
  const isOpen = date.getTime() >= new Date().getTime();
  const isFailed = userAmount * quorum > results.reduce((ac, cur) => ac + cur, 0);
  let color = isHovered ? 'has-background-grey-lighter' : 'has-background-light';
  if (isNew) {
    color = isHovered ? 'has-background-primary' : 'has-background-primary-light';
  }
  if (isPoll) {
    if (isOpen) {
      color = isHovered ? 'has-background-warning' : 'has-background-warning-light';
    } else if (isFailed) {
      color = isHovered ? 'has-background-grey-light' : 'has-background-grey-lighter';
    } else {
      if (pollData.results.some((x) => x > 50)) {
        color = isHovered ? 'has-background-primary' : 'has-background-primary-light';
      } else {
        color = isHovered ? 'has-background-danger' : 'has-background-danger-light';
>>>>>>> a880bb7... fix: rebase conflict
      }
    : undefined;

  return (
    <div
      className={`card mt-2 ${
        clickableProps && isHovered ? 'has-background-link-light is-clickable' : ''
      }`}
      {...clickableProps}
    >
      <div className={`card--color-status ${baseColorClassName}`}></div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
