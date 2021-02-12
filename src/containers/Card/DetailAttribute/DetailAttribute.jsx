import React from 'react';
import './DetailAttribute.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailAttribute = ({ icon, children }) => {
  return (
    <div className="column is-flex is-align-items-center">
      <div className="detail-attribute--icon">
        {icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}
      </div>
      <span className="mx-2">{children}</span>
    </div>
  );
};

export default DetailAttribute;
