import React from 'react';
import GenericPage from '../Pages/GenericPage/GenericPage';

const MyData = (props) => {
  return (
    <GenericPage hasBackButton={false}>
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img alt="Userpic" src="/userpic.jpeg" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p className="mb-1">
              <strong>Юзер Юзерович</strong> <small>Председатель правления ТС</small>
            </p>
            <p className="subtitle is-7 mb-1">Квартира №32 | Лицевой счет №76543687676</p>
            <p className="subtitle is-7">Площадь (общая/жилая) - 75/68м²</p>
          </div>
        </div>
      </article>
      <hr />
      <div className="box">
        <div className="heading">Общая информация</div>
        <hr />
        <div className="field">
          <label className="label">Имя</label>
          <div className="control">
            <input className="input" disabled type="text" defaultValue="Юзер Юзерович" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" defaultValue="user@pobach.by" />
          </div>
        </div>
        <div className="field">
          <label className="label">Телефон</label>
          <div className="control">
            <input className="input" type="text" defaultValue="+375 (44) 1234567" />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="heading">Настройки видимости</div>
        <hr />
        <div className="field">
          <label className="checkbox">
            <input type="checkbox" />
            &nbsp;Показывать e-mail
          </label>
        </div>
        <div className="field">
          <label className="checkbox">
            <input type="checkbox" />
            &nbsp;Показывать номер телефона
          </label>
        </div>
      </div>
      <div className="container">
        <button className="button is-success">Сохранить изменения</button>
      </div>
    </GenericPage>
  );
};

export default MyData;
