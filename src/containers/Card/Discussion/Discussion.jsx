import React from 'react';
import { BaseEntityCard } from '..';

const DiscussionCard = ({ isTopic, isEvent, isPoll, ...props }) => {
  return <BaseEntityCard dateText="Дата создания" {...props} />;
};

export default DiscussionCard;
