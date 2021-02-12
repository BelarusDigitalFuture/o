import React from 'react';
import { BaseEntityCard } from '..';
import { isPollCompleted, isPollOpened } from '../../../shared/state/polls';

const colors = {
  isOpen: 'has-background-warning',
  completed: 'has-background-primary',
  notCompleted: 'has-background-danger',
};

const PollCard = (props) => {
  const { date, pollData, userAmount, quorum } = props;
  let colorClassName;
  if (isPollOpened(date)) {
    colorClassName = colors.isOpen;
  } else if (isPollCompleted({ pollData, quorum, userAmount, date })) {
    colorClassName = colors.completed;
  } else {
    colorClassName = colors.notCompleted;
  }
  return (
    <BaseEntityCard baseColorClassName={colorClassName} dateText="Дата окончания" {...props} />
  );
};

export default PollCard;
