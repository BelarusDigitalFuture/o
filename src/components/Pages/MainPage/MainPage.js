import React from 'react';
import { useHistory } from 'react-router-dom';
import GenericPage from '../GenericPage/GenericPage';
import FlourishGraph from '../../FlourishGraph';

const MainPage = () => {
  const history = useHistory();
  return (
    <GenericPage hasBackButton={false}>
      <div className="notification is-warning is-light">
        У вас не оплачены коммунальные платежи за январь&apos;21.{' '}
        <a className="is-link" onClick={() => console.log('not implemented')}>
          Перейти к оплате
        </a>
      </div>
      <div className="notification is-warning is-light">
        У вас есть непросмотренные голосования.{' '}
        <a className="is-link" onClick={() => history.push('/polls')}>
          Перейти к голосованиям
        </a>
      </div>

      <div className="columns">
        <div className="column" style={{ height: '50%' }}>
          {/*water*/}
          <FlourishGraph src="visualisation/5260155" />
        </div>
        <div className="column">
          {/*electricity*/}
          <FlourishGraph src="visualisation/5259749" />
        </div>
        <div className="column">
          {/*all utulities*/}
          <FlourishGraph src="visualisation/5260078" />
        </div>
      </div>
    </GenericPage>
  );
};

export default MainPage;
