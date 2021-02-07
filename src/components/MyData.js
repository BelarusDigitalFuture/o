import React from 'react';

const MyData = (props) => {
  return (
    <div className="section pb-5">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="/userpic.jpeg" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Юзер Юзерович</strong> <small>Председатель правления ТС</small>
            </p>
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
            <input className="input" type="text" defaultValue="Юзер Юзерович" />
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
    </div>
  );
};

export default MyData;
