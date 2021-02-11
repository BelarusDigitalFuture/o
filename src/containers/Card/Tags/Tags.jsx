import React from 'react';

const Tags = ({ tags }) => {
  return (
    <div>
      {tags.map((tag, i) => (
        <span key={i} className="tag is-info is-light mr-1">
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
