import React from 'react';
import GenericPage from '../GenericPage/GenericPage';
import FlourishGraph from '../../FlourishGraph';

const MainPage = () => {
  return (
    <GenericPage hasBackButton={false}>
      <div className="card">
        {/*water*/}
        <FlourishGraph src="visualisation/5260155" />
      </div>
      <div className="card">
        {/*electricity*/}
        <FlourishGraph src="visualisation/5259749" />
      </div>
      <div className="card">
        {/*all utulities*/}
        <FlourishGraph src="visualisation/5260078" />
      </div>
    </GenericPage>
  );
};

export default MainPage;
