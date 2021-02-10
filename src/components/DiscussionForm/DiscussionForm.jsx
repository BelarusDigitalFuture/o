import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { AppForm } from '../../shared';
import { TextInput, SelectField } from '../../shared/form';
import GenericPage from '../Pages/GenericPage/GenericPage';
import { TagsContext, TopicsContext } from '../../shared/state';

const DiscussionForm = () => {
  const { tags } = useContext(TagsContext);
  const { dispatch } = useContext(TopicsContext);
  const history = useHistory();
  const options = tags && tags.map(({ title }) => ({ label: title, value: title }));
  const handleFormSubmit = (values) => {
    dispatch({ type: 'ADD_TOPIC', topic: { ...values } });
    history.push('/discussions');
  };

  const validationSchema = Yup.object({
    header: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
    text: Yup.string().required('Required'),
  });

  return (
    <GenericPage header="Новое обсуждение">
      <Formik
        initialValues={{ tags: [], header: '', text: '' }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <AppForm>
          <TextInput label={'Заголовок'} name="header" />
          <TextInput label={'Текст'} name="text" />
          <Field label="Теги" name="tags" isMulti component={SelectField} options={options} />
        </AppForm>
      </Formik>
    </GenericPage>
  );
};

export default DiscussionForm;
