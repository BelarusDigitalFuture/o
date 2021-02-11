import React from 'react';
import Card from '../Card';

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
      {tags.map((tag, i) => (
        <span key={i} className="tag is-info is-light mr-1">
          #{tag}
        </span>
      ))}
      {children}
    </Card>
  );
};

export default BaseEntityCard;
