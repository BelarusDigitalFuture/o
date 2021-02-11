import React from 'react';
import Card from '../Card';

const color = 'has-background-primary';

const DiscussionCard = ({ isTopic, isEvent, isPoll, ...props }) => {
  return <Card hoverClassName="" {...props} />;
};

export default DiscussionCard;
