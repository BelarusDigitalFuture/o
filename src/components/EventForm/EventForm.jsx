import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Field, useFormikContext, Formik } from 'formik';
import * as Yup from 'yup';
import { AppForm, Geocoder, Logger } from '../../shared';
import { TextInput, SelectField, DatePickerField } from '../../shared/form';
import GenericPage from '../Pages/GenericPage/GenericPage';
import { TagsContext, EventsContext, TopicsContext } from '../../shared/state';
import { Map, LocationMarker } from '../../shared/components';

const FormContent = ({ position, setPosition }) => {
  const { tags } = useContext(TagsContext);
  const selectFieldOptions = tags && tags.map(({ title }) => ({ label: title, value: title }));
  const datePickerCustomInput = <input className="input" type="search" />;
  const { topics } = useContext(TopicsContext);
  const topicOptions = topics.map(({ header, id }) => ({ label: header, value: id }));
  const handleMapClick = (e) => {
    setPosition(e.latLng.toJSON());
    Geocoder.geocode({ location: e.latLng }, (results, status) => {
      if (status !== 'OK') {
        Logger.error(status);
        return;
      }
      if (!results.length) {
        return;
      }
      formik.setFieldValue('address', results[0].formatted_address);
    });
  };
  const formik = useFormikContext();
  return (
    <AppForm>
      <TextInput label={'Заголовок'} name="header" />
      <TextInput label={'Текст'} name="text" />
      <TextInput label={'Адрес проведения'} name="address" />
      <Map onClick={handleMapClick}>
        <LocationMarker position={position} />
      </Map>
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
      <Field
        label="Связанное обсуждение"
        name="discussionId"
        component={SelectField}
        options={topicOptions}
      />
    </AppForm>
  );
};

const EventForm = () => {
  const { dispatch } = useContext(EventsContext);
  const history = useHistory();
  const handleFormSubmit = (values) => {
    dispatch({ type: 'ADD_EVENT', event: { ...values, position } });
    history.push('/events');
  };

  const [position, setPosition] = useState({});
  const { topicId } = useParams();

  const validationSchema = Yup.object({
    header: Yup.string().max(50, 'Поле должно быть не более 50 символов').required('Required'),
    text: Yup.string().required('Поле обязательно для заполнения'),
    address: Yup.string().required('Поле обязательно для заполнения'),
    date: Yup.date().required('Поле обязательно для заполнения'),
  });

  return (
    <GenericPage header="Новая встреча">
      <Formik
        initialValues={{
          tags: [],
          header: '',
          text: '',
          address: '',
          date: '',
          discussionId: topicId,
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <FormContent position={position} setPosition={setPosition} />
      </Formik>
    </GenericPage>
  );
};

export default EventForm;
