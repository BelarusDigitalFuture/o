import React from 'react';
import Card from '../Card';
import { Tags } from '..';

const defaulColor = 'has-background-grey-lighter';

const BaseEntityCard = (props) => {
  const {
    header,
    author,
    dateText,
    date,
    tags,
    children,
    baseColorClassName = defaulColor,
    ...rest
  } = props;
  return (
    <Card baseColorClassName={baseColorClassName} {...rest}>
      <p className="title is-4">{header}</p>
      <p className="subtitle is-7 mb-1">
        Автор: {author} | {dateText}: {date.toLocaleDateString()}
      </p>
      <Tags tags={tags} />
      {children}
    </Card>
  );
};

export default BaseEntityCard;
