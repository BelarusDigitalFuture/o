import React from 'react';
import { useHistory } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GenericPage = ({ header = '', children }) => {
  const history = useHistory();
  return (
    <div className="section pt-5 mt-3">
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <button
              className="button is-info is-light"
              onClick={() => {
                //TODO ugly af
                history.push(window.location.pathname.split('/').slice(0, -1).join('/'));
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
