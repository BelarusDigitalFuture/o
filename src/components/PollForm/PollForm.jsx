import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Field } from 'formik';
import * as Yup from 'yup';
import { AppForm } from '../../shared';
import { TextInput, SelectField, CheckboxField } from '../../shared/form';
import { TagsContext, PollsContext } from '../../shared/state';

const PollForm = () => {
  const { tags } = useContext(TagsContext);
  const { dispatch } = useContext(PollsContext);
  const history = useHistory();
  const options = tags && tags.map(({ title }) => ({ label: title, value: title }));
  const handleFormSubmit = (values) => {
    dispatch({ type: 'ADD_POLL', poll: { ...values } });
    history.push('/polls');
  };

  const validationSchema = Yup.object({
    header: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
    text: Yup.string().required('Required'),
    question: Yup.string().required('Required'),
  });

  return (
    <AppForm
      initial={{ tagsss: [] }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      <TextInput label={'Header'} name="header" />
      <TextInput label={'Text'} name="text" />
      <Field label="Tags" name={'tags'} isMulti component={SelectField} options={options} />
      <CheckboxField name="multichoice">Multi</CheckboxField>
      <TextInput label={'Question'} name="question" />
    </AppForm>
  );
};

export default PollForm;
