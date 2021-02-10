import React from 'react';
import { useHistory } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GenericPage = ({ header = '', hasBackButton = true, children }) => {
  const history = useHistory();
  return (
    <div className="section">
      <nav className={'level ' + (hasBackButton ? '' : 'is-hidden')}>
        <div className="level-left">
          <div className="level-item">
            <button
              className="button is-info is-light"
              onClick={() => {
                history.goBack();
              }}
            >
              <FontAwesomeIcon className="aria-hidden" icon={faArrowLeft} />
            </button>
          </div>
          <div className="level-item">
            <p className="subtitle is-5">
              <strong>{header}</strong>
            </p>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default GenericPage;
