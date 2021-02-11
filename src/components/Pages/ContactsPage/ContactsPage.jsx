import React from 'react';
import GenericPage from '../GenericPage/GenericPage';

const ContactsPage = () => {
  const generateRow = (contactName, openHours, phoneNumber) => {
    return (
      <tr>
        <td>{contactName}</td>
        <td>{openHours}</td>
        <td>{phoneNumber}</td>
        <td>
          <a href="mailto:no-contact@no-domain.no">Написать</a>
        </td>
      </tr>
    );
  };

  return (
    <GenericPage hasBackButton={false} header="Полезные контакты">
      <table className="table">
        <thead>
          <th>Название организации</th>
          <th>Время работы</th>
          <th>Телефон</th>
          <th />
        </thead>
        <tbody>
          {generateRow('Председатель ТС', 'Пн-Пт, 09:00-18:00', '+375 44 9467512')}
          {generateRow('Главный бухгалтер', 'Пн-Пт, 09:00-18:00', '+375 44 9182716')}
          {generateRow('Диспетчера жилого дома', '24/7', '+375 44 9172615')}
          {generateRow('Аварийная служба', '24/7', '+375 44 9162512')}
          {generateRow('Обслуживание домофонов', 'Пн-Сб, 09:00-17:00', '+375 44 9182635')}
          {generateRow('Обслуживание лифтов', 'Пн-Вс, 09:00-14:00', '+375 44 9273618')}
          {generateRow('Электроснабжение', '27/4', '+375 44 9182731')}
          {generateRow('Видеонаблюдение и шлагбаум', '27/4', '+375 44 9871233')}
        </tbody>
      </table>
    </GenericPage>
  );
};

export default ContactsPage;
