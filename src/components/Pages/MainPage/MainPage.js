import React from 'react';
import GenericPage from '../GenericPage/GenericPage';
import FlourishGraph from '../../FlourishGraph';

const MainPage = () => {
  return (
    <GenericPage hasBackButton={false}>
      <div className="columns">
        <div className="column">
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
