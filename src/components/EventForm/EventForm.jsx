import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Field } from 'formik';
import * as Yup from 'yup';
import { AppForm } from '../../shared';
import { TextInput, SelectField, DatePickerField } from '../../shared/form';
import GenericPage from '../Pages/GenericPage/GenericPage';
import { TagsContext, EventsContext } from '../../shared/state';

const EventForm = () => {
  const { tags } = useContext(TagsContext);
  const { dispatch } = useContext(EventsContext);
  const history = useHistory();
  const selectFieldOptions = tags && tags.map(({ title }) => ({ label: title, value: title }));
  const datePickerCustomInput = <input className="input" type="search" />;
  const handleFormSubmit = (values) => {
    dispatch({ type: 'ADD_EVENT', event: { ...values } });
    history.push('/events');
  };

  const validationSchema = Yup.object({
    header: Yup.string().max(50, 'Поле должно быть не более 50 символов').required('Required'),
    text: Yup.string().required('Поле обязательно для заполнения'),
    address: Yup.string().required('Поле обязательно для заполнения'),
    date: Yup.date().required('Поле обязательно для заполнения'),
  });

  return (
    <GenericPage header="Новая встреча">
      <AppForm
        initial={{ tags: [], header: '', text: '', address: '', date: '' }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <TextInput label={'Заголовок'} name="header" />
        <TextInput label={'Текст'} name="text" />
        <TextInput label={'Адрес проведения'} name="address" />
        <Field
          label="Теги"
          name="tags"
          isMulti
          component={SelectField}
          options={selectFieldOptions}
        />
        <Field
          label="Дата проведения"
          name="date"
          component={DatePickerField}
          customInput={datePickerCustomInput}
        />
      </AppForm>
    </GenericPage>
  );
};

export default EventForm;
