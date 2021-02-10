import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { AppForm } from '../../shared';
import {
  TextInput,
  SelectField,
  CheckboxField,
  DatePickerField,
  CreatableSelectField,
} from '../../shared/form';
import { TagsContext, PollsContext, TopicsContext } from '../../shared/state';
import GenericPage from '../Pages/GenericPage/GenericPage';

const PollForm = () => {
  const { topicId } = useParams();
  const { tags } = useContext(TagsContext);
  const { dispatch } = useContext(PollsContext);
  const history = useHistory();
  const tagOptions = tags && tags.map(({ title }) => ({ label: title, value: title }));
  const { topics } = useContext(TopicsContext);
  const topicOptions = topics.map(({ header, id }) => ({ label: header, value: id }));
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
      <Formik
        initialValues={{
          tags: [],
          header: '',
          text: '',
          date: '',
          question: '',
          items: [],
          discussionId: topicId,
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <AppForm>
          <TextInput label={'Заголовок'} name="header" />
          <TextInput label={'Описание'} name="text" />
          <Field label="Теги" name={'tags'} isMulti component={SelectField} options={tagOptions} />
          <Field
            label="Дата проведения"
            name="date"
            component={DatePickerField}
            customInput={<input className="input" type="search" />}
          />
          <CheckboxField label="Возможно выбрать несколько вариантов?" name="multichoice">
            &nbsp;Возможно выбрать несколько вариантов
          </CheckboxField>
          <TextInput label={'Вопрос'} name="question" />
          <Field label="Варианты ответа" name="items" isMulti component={CreatableSelectField} />
          <Field
            label="Связанное обсуждение"
            name="discussionId"
            component={SelectField}
            options={topicOptions}
          />
        </AppForm>
      </Formik>
    </GenericPage>
  );
};

export default PollForm;
