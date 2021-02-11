import React from 'react';
import { BaseEntityCard } from '..';

const isPollCompleted = (results) => {
  return results.some((x) => x > 50);
};

const isPollOpened = (date) => {
  return date.getTime() >= new Date().getTime();
};

const colors = {
  isOpen: 'has-background-warning',
  completed: 'has-background-primary',
  notCompleted: 'has-background-danger',
};

const PollCard = (props) => {
  const { date, pollData } = props;
  let colorClassName;
  if (isPollOpened(date)) {
    colorClassName = colors.isOpen;
  } else if (isPollCompleted(pollData?.results)) {
    colorClassName = colors.completed;
  } else {
    colorClassName = colors.notCompleted;
  }
  return (
    <BaseEntityCard baseColorClassName={colorClassName} dateText="Дата окончания" {...props} />
  );
};

export default PollCard;
