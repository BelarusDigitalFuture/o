import React, { useState } from 'react';
import GenericPage from '../GenericPage/GenericPage';
import DocumentCard from '../../DocumentCard';
import { faBook, faFileImage } from '@fortawesome/free-solid-svg-icons';

const docList = [
  { name: 'Устав ТС', type: '', icon: faBook },
  { name: 'Смета доходов и расходов за 2020 год', type: 'finance', icon: faBook },
  { name: 'Ведомость о расходе целевых взносов в 2019 году', type: 'finance', icon: faBook },
  { name: 'Схема электроразводки', type: 'utilities', icon: faFileImage },
  { name: 'Схема разводки отопления', type: 'utilities', icon: faFileImage },
  { name: 'План парковки', type: 'utilities', icon: faFileImage },
];

const DocumentsPage = () => {
  const [docType, setDocType] = useState('all');

  const getDocs = () => {
    if (docType === 'all') {
      return docList;
    }
    return docList.filter((x) => x.type === docType);
  };

  return (
    <GenericPage hasBackButton={false}>
      <nav className="panel">
        <p className="panel-heading">Полезные документы</p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input" type="text" disabled placeholder="Поиск пока недоступен :(" />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>
          </p>
        </div>
        <p className="panel-tabs">
          <a className={docType === 'all' ? 'is-active' : ''} onClick={() => setDocType('all')}>
            Все
          </a>
          <a
            className={docType === 'finance' ? 'is-active' : ''}
            onClick={() => setDocType('finance')}
          >
            Финансы
          </a>
          <a
            className={docType === 'utilities' ? 'is-active' : ''}
            onClick={() => setDocType('utilities')}
          >
            Схемы и планы
          </a>
        </p>

        {getDocs().map((x, i) => (
          <DocumentCard key={i} name={x.name} icon={x.icon} />
        ))}
      </nav>
    </GenericPage>
  );
};

export default DocumentsPage;
