import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Field } from 'formik';
import * as Yup from 'yup';
import { AppForm } from '../../shared';
import {
  TextInput,
  SelectField,
  CheckboxField,
  DatePickerField,
  CreatableSelectField,
} from '../../shared/form';
import { TagsContext, PollsContext } from '../../shared/state';
import GenericPage from '../Pages/GenericPage/GenericPage';

const PollForm = () => {
  const { tags } = useContext(TagsContext);
  const { dispatch } = useContext(PollsContext);
  const history = useHistory();
  const tagOptions = tags && tags.map(({ title }) => ({ label: title, value: title }));
  const handleFormSubmit = (values) => {
    dispatch({ type: 'ADD_POLL', poll: { ...values } });
    history.push('/polls');
  };

  const validationSchema = Yup.object({
    header: Yup.string()
      .max(50, 'Поле не должно быть длиннее 50 символов')
      .required('Поле обязательно для заполнения'),
    text: Yup.string().required('Поле обязательно для заполнения'),
    question: Yup.string().required('Поле обязательно для заполнения'),
    tags: Yup.array(),
    date: Yup.date().required('Поле обязательно для заполнения'),
    items: Yup.array()
      .min(2, 'Должно быть как минимум два варианта ответа')
      .required('Поле обязательно для заполнения'),
  });

  return (
    <GenericPage>
      <AppForm
        initial={{ tags: [], header: '', text: '', date: '', question: '', items: [] }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <TextInput label={'Header'} name="header" />
        <TextInput label={'Text'} name="text" />
        <Field label="Tags" name={'tags'} isMulti component={SelectField} options={tagOptions} />
        <Field
          label="Дата проведения"
          name="date"
          component={DatePickerField}
          customInput={<input className="input" type="search" />}
        />
        <CheckboxField label="Возможно выбрать несколько вариантов?" name="multichoice">
          Multi
        </CheckboxField>
        <TextInput label={'Вопрос'} name="question" />
        <Field
          label="Варианты ответа"
          name="items"
          isMulti
          component={CreatableSelectField}
          // options={tagOptions}
        />
      </AppForm>
    </GenericPage>
  );
};

export default PollForm;
