import React from 'react';
import Card from '../Card';

export default function Event({ isTopic, isEvent, isPoll, ...props }) {
  return <Card isEvent {...props} />;
}
