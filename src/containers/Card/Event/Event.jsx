import React from 'react';
import { BaseEntityCard } from '..';

export default function Event({ isTopic, isEvent, isPoll, ...props }) {
  return <BaseEntityCard dateText="Дата проведения" isEvent {...props} />;
}
