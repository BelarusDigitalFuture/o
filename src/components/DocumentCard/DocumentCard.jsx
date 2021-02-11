import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DocumentCard = ({ icon = '', name }) => {
  return (
    <a className="panel-block is-active">
      <span className="panel-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      {name}
    </a>
  );
};

export default DocumentCard;
