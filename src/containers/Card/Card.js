import React, { useState } from 'react';
import './Card.css';

const Card = ({ baseColorClassName = '', children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const clickableProps = onClick
    ? {
        onClick,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
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
