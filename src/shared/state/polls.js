import React, { createContext, useReducer } from 'react';

export const PollsContext = createContext();

const defaultPolls = [
  {
    header: 'Замена детской площадки',
    date: new Date(2021, 3, 31),
    author: 'Денис Цвирко',
    text:
      'У нас во дворе площадка, на которой ещё я играл в 6 лет. Может быть, пришло время обновить ради НАШИХ цветов жизни?',
    isRadio: false,
    tags: ['официально', 'ремонт', 'ремонтный фонд'],
    pollData: {
      question: 'Какой цвет хотите?',
      items: ['желтый', 'красный', 'коричневый', 'индиго'],
      results: [13, 16, 21, 11],
      discussionId: 0,
    },
    id: 1613070700093,
  },
  {
    header: 'Новый лифт за счет ремонтного фонда',
    date: new Date(2021, 1, 28),
    author: 'Сергей Ворожун',
    text:
      'Ремонтный фонд нашего товарищества на 01 января 2021 года составил 123.456 рублей, эти деньги на счете ТС в банке. Правление предлагает заменить старый лифт, который уже изношен и подлежит ремонту, на новый. Мы подобрали несколько вариантов.',
    isRadio: true,
    tags: ['официально', 'ремонт', 'ремонтный фонд'],
    pollData: {
      question: 'Вы за то, чтобы заменить старый изношенный лифт в доме на новый?',
      items: [
        'Да. Покупаем отечественный "Моглевмаш" (Беларусь) - бюджет 50.000 рублей',
        'Да. Покупаем импортный KONE (Финляндия) - бюджет 100.000 руб',
        'Нет. Новый лифт не нужен, а деньги нужно положить на депозит под проценты на будущее',
        'Нет. Ничего не делать, я против предложенных вариантов, а деньги пусть остаются на счете',
      ],
      results: [13, 16, 21, 11],
      discussionId: 1613067128811,
    },
    id: 1613067113898,
    userAmount: 100,
    quorum: 0.5,
  },
  {
    header: 'Меняем унитазы',
    date: new Date(2021, 1, 27),
    author: 'Василий Пушкин',
    text: 'Господа, унитазы в наших домах уже поизносились, нужны бы новые. Голосуем!',
    isRadio: true,
    tags: ['официально', 'ремонт'],
    pollData: {
      question: 'Хотите новый унитаз?',
      items: ['Да', 'Нет'],
      results: [52, 11],
      discussionId: 0,
    },
    id: 0,
    quorum: 0.5,
    userAmount: 100,
  },
  {
    header: 'Ремонт детской площадки',
    date: new Date(2020, 2, 31),
    author: 'Алоиза Пашкевич',
    text:
      'На новый год я пришла пьяная на площадку и сломала качели. Предлагаю вместо них установить бар с пилоном.',
    isRadio: false,
    tags: ['неофициально', 'двор', 'дети'],
    pollData: {
      question: 'Что устанавливаем?',
      items: ['Пилон', 'Бар', 'Новые качели'],
      results: [11, 32, 53],
      discussionId: 1613070770158,
    },
    id: 1613070912952,
    quorum: 0.5,
    userAmount: 100,
  },
  {
    header: 'Празднуем новый год вместе',
    date: new Date(2020, 11, 31),
    author: 'Сергей Есенин',
    text:
      'Давайте отметим новый год у нас во дворе! Я почитаю стихи, а Алоиза опять сломает качели',
    isRadio: true,
    tags: ['неофициально', 'праздник', 'дети'],
    pollData: {
      question: 'Придете?',
      items: ['Да, один', 'Да, с семьей', 'Нет'],
      results: [14, 52, 3],
      discussionId: 0,
    },
    id: 2,
    userAmount: 100,
    quorum: 0.5,
  },
  {
    header: 'А не поменять ли мне жену?',
    date: new Date(2020, 10, 1),
    author: 'Лев Толстой',
    text: 'Что-то боярыня мне моя надоела. Думаю сменить, не знаю на кого. Подскажете?',
    isRadio: true,
    tags: ['неофициально', 'семья'],
    pollData: {
      question: 'Кого выбрать?',
      items: ['Людку из третьего', 'Соседа Игоря', 'Зинку с пятого'],
      results: [19, 35, 12],
      discussionId: 1,
    },
    id: 3,
    userAmount: 100,
    quorum: 0.5,
  },
  {
    header: 'Голосование за очень важный вопрос',
    date: new Date(2020, 11, 31),
    author: 'Председатель дома',
    text: 'Чтож, давайте голосовать за очень важный вопрос!',
    isRadio: true,
    tags: ['официально', 'ремонт'],
    pollData: {
      question: 'Вопрос важный?',
      items: ['Очень важный', 'Архи важный!'],
      results: [14, 27],
      discussionId: 1,
    },
    id: 4,
    userAmount: 100,
    quorum: 0.5,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POLL':
      return [
        ...state,
        {
          id: Date.now(),
          header: action.poll.header,
          text: action.poll.text,
          isRadio: !action.poll.multichoice,
          date: action.poll.date,
          author: 'admin',
          tags: action.poll.tags,
          pollData: {
            question: action.poll.question,
            items: action.poll.items,
            results: Array(action.poll.items.length).fill(0),
            discussionId: action.poll.discussionId || 0,
          },
          quorum:
            action.poll.quorum && action.poll.tags.includes('официально')
              ? action.poll.quorum * 0.5
              : !action.poll.quorum && action.poll.tags.includes('официально')
              ? 0.5
              : 1,
        },
      ];
    case 'REPEAT_POLL':
      return [
        ...state.filter((e) => e.id !== action.payload.id),
        {
          header: `${action.payload.header} (ПОВТОРНО)`,
          date: new Date(2021, 3, 10),
          author: action.payload.author,
          text: action.payload.text,
          isRadio: !action.payload.isRadio || true,
          tags: action.payload.tags,
          isAccepted: action.payload.isAccepted || false,
          pollData: action.payload.pollData,
          id: Date.now(),
          userAmount: action.payload.userAmount,
          quorum: action.payload.quorum * 0.5,
        },
      ];
    default:
      return state;
  }
};

const PollsProvider = ({ children }) => {
  const [polls, dispatch] = useReducer(reducer, defaultPolls);

  return <PollsContext.Provider value={{ polls, dispatch }}>{children}</PollsContext.Provider>;
};

export const isPollOpened = (date) => {
  return date.getTime() >= new Date().getTime();
};

export const countVotesSum = (pollData) => {
  return pollData.results.reduce((ac, cur) => ac + cur);
};

export const isPollCompleted = ({ pollData, quorum, userAmount, date }) => {
  return !isPollOpened(date) && userAmount * quorum <= countVotesSum(pollData);
};

export default PollsProvider;
