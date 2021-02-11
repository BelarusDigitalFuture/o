import React, { useState } from 'react';
import GenericPage from '../GenericPage/GenericPage';
import DocumentCard from '../../DocumentCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFileImage, faSearch } from '@fortawesome/free-solid-svg-icons';

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
  const [filterString, setFilterString] = useState('');

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
            <input
              className="input"
              type="text"
              placeholder="Поиск"
              onChange={(e) => setFilterString(e.target.value)}
            />
            <span className="icon is-left">
              <FontAwesomeIcon icon={faSearch} />
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

        {getDocs()
          .filter((x) => x.name.toLowerCase().includes(filterString.toLowerCase()))
          .map((x, i) => (
            <DocumentCard key={i} name={x.name} icon={x.icon} />
          ))}
      </nav>
    </GenericPage>
  );
};

export default DocumentsPage;
