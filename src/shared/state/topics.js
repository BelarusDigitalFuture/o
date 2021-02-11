import React, { createContext, useReducer } from 'react';

export const TopicsContext = createContext();

const defaultTopics = [
  // TEMPLATE
  // {
  //   id: Date.now(),
  //   header: '',
  //   author: '',
  //   date: new Date(),
  //   text: '',
  //   tags: [],
  //   topicData: { likes: 0, pollId: 0, comments: [{ author: '', date: new Date(), likes: 1, comment: '' }] },
  // },
  {
    id: 1613070770158,
    header: 'Остановим пьянство Алоизы!',
    author: 'Председатель',
    date: new Date(2020, 0, 2),
    text:
      'Доколе, господа? Как было у Стругацких - "Напился, ругался, сломал деревцо - стыдно смотреть людям в лицо". Предлагаю скинуться на кодировку госпожы Алоизы. Дети же смотрят!',
    tags: ['неофициально', 'наш дом'],
    topicData: {
      likes: 82,
      pollId: 1613070912952,
      comments: [
        {
          author: 'Алоиза Пашкевич',
          date: new Date(2020, 0, 3),
          comment: 'Я больше так не буду',
          likes: 11,
        },
        {
          author: 'Константин Станиславский',
          date: new Date(2020, 0, 4),
          comment: 'Не верю.',
          likes: 82,
        },
      ],
    },
  },
  {
    id: 1613070380786,
    header: 'Собрание жильцов №3',
    author: 'Сергей Есенин',
    date: new Date(2021, 0, 1),
    text:
      'Друзья мои, я всю новогоднюю ночь думал о судьбе нашего дома, и решил, что без очередной встречи у нас, увы, ничего не выйдет. Предлагайте вопросы на обсуждение',
    tags: ['официально', 'наш дом'],
    topicData: {
      likes: 0,
      pollId: 0,
      comments: [
        {
          author: 'Дмитрий Удрас',
          date: new Date(2021, 0, 11),
          likes: 76,
          comment: 'Лучше бы пил.',
        },
        {
          author: 'Василий Яковлев',
          date: new Date(2021, 0, 12),
          likes: 627,
          comment:
            'Предлагаю обсудить вопрос прекращения личных собраний, когда у нас есть такая замечательная платформа.',
        },
        {
          author: 'Кирилл Горшков',
          date: new Date(2021, 0, 29),
          likes: 1,
          comment: 'Сергей опять будет говорить, что мы все быдло и бездуховщина. Я не приду',
        },
      ],
    },
  },
  {
    id: 1613067539833,
    header: 'Собираем команду двора по футболу',
    author: 'Глеб Александров',
    date: new Date(2021, 0, 17),
    text:
      'Вчера шёл домой и встретил старого друга по секции динамоского “Минска”. Предложил выйти раз на раз. В смысле, не бить лицо друг другу, а сыграть дерби наших дворов. А у нас-то и команды нет. Соберём?',
    tags: ['неофициально', 'дети', 'спорт'],
    topicData: {
      likes: 62,
      pollId: 0,
      comments: [
        {
          author: 'Игнат Сергеев',
          date: new Date(2021, 0, 18),
          likes: 13,
          comment: 'Я могу на воротах!',
        },
        {
          author: 'Кутуз Васильев',
          date: new Date(2021, 0, 19),
          likes: 3,
          comment:
            'Я бы с радостью, но я закончил свою дворовую карьеру. Хотите, за тактику поясню?',
        },
        {
          author: 'Лапоть Денис',
          date: new Date(2021, 0, 19),
          likes: 192,
          comment: 'За ящик пива я сыграю сразу на всех позициях!',
        },
        {
          author: 'Василь Романов',
          date: new Date(),
          likes: 54,
          comment:
            'Я считаю, что должны сыграть самые опытные представители двора. В 40 карьера только начинается! :)',
        },
        {
          author: 'Кристина Рамуальдова',
          date: new Date(2021, 0, 22),
          likes: 28,
          comment: 'Я этих самых опытных на стадине в последний раз видела лет 10 назад))))',
        },
      ],
    },
  },
  {
    id: 1613067128811,
    author: 'Сергей Ворожун',
    header: 'Лифт снова сломался. Надоело!',
    text:
      'Наш лифт уже 3 раза за неделю ломался, вызывали техников. Нашему “могилёвцу” уже ничего не поможет, нужен новый нормальный. Тем более, мы - жильцы исправно платим в ремонтный фонд, вот есть хороший повод его частично потратить.',
    date: new Date(2020, 11, 30),
    tags: ['ремонт', 'наш дом'],
    topicData: {
      likes: 113,
      pollId: 1613067113898,
      comments: [
        {
          author: 'Председатель',
          date: new Date(2020, 11, 31),
          comment: 'Поддерживаю. После обсуждения, вынесем на голосование',
          likes: 89,
        },
        {
          author: 'Алексей Навальный',
          date: new Date(2021, 0, 3),
          comment: 'А сколько у нас денег в ремонтном фонде уже?',
          likes: 352,
        },
        {
          author: 'Председатель',
          date: new Date(2021, 0, 3),
          comment: '123 тысячи рублей примерно будет на начало года.',
          likes: 32,
        },
        {
          author: 'Алексей Навальный',
          date: new Date(2021, 0, 4),
          comment: 'А где эти деньги?',
          likes: 1,
        },
        {
          author: 'Председатель',
          date: new Date(2021, 0, 5),
          comment:
            'На счете в банке, где же ещё?! Вы, Алексей, как всегда в своем репертуаре :) У нас же в “Побаче” всё прозрачно, вы же сами можете проверить эту информацию тут.',
          likes: 826,
        },
        {
          author: 'Алексей Навальный',
          date: new Date(2021, 0, 8),
          comment:
            'Надо покупать сейчас, а то рубль снова обвалится, доллар вырастет, потом уже ничего не купишь за эти деньги. Нечего их солить в банке',
          likes: 0,
        },
      ],
    },
  },
  {
    id: 1612881006107,
    header: 'Я узнал что у меня есть огромная семья',
    author: 'Владимир Орлов',
    date: new Date(2021, 1, 3),
    text:
      'Я узнал, что у меня<br/>Есть огромная семья<br/>И тропинка и лесок<br/>В поле каждый колосок<br/>Речка, небо голубое —<br/>Это все мое родное<br/>Это Родина моя,<br/>Всех люблю на свете я!',
    tags: ['творчество'],
    topicData: {
      likes: 4,
      pollId: 0,
      comments: [
        {
          author: 'Сергей Есенин',
          date: new Date(2021, 1, 4),
          comment: 'А у меня лучше выходит',
          likes: 1,
        },
        {
          author: 'Сергей Пушник',
          date: new Date(2021, 1, 5),
          comment: 'Амфибрахием читать было бы приятно',
          likes: 2,
        },
      ],
    },
  },
  {
    id: 1612881007141,
    header: 'Дом похож на катакомбы',
    author: 'Сталкер Иванов',
    date: new Date(2021, 0, 30),
    text:
      'Вчера вернулся из Люксембурга, там всё красиво, а у нас - трущобы. Может быть пора с этим что-то делать? Накидывайте идеи',
    tags: ['наш дом', 'ремонт'],
    topicData: {
      likes: 2,
      pollId: 2,
      comments: [
        {
          author: 'Глеб Самойлов',
          date: new Date(2020, 0, 31),
          comment: 'А мне всё нравится, потресканая штукатурка добавляет шарма',
          likes: 11,
        },
        {
          author: 'Евгений Онегин',
          date: new Date(2020, 1, 1),
          comment: 'Всяко лучше чем в Ростове',
          likes: 0,
        },
      ],
    },
  },
  {
    id: 1612881007433,
    header: 'Наши новые соседи из третьего подъезда',
    author: 'Евгений Онегин',
    date: new Date(2020, 10, 29),
    text: 'У нас появились новые соседи! <br/>Давайте чествовать их как в последний раз!',
    tags: ['соседи', 'наш дом'],
    topicData: {
      likes: 15,
      pollId: 0,
      comments: [
        {
          author: 'Евгений Онегин',
          date: new Date(2020, 11, 3),
          comment: 'Пробовал вчера им читать свои стихи, так они выгнали. Бездуховщина',
          likes: 2,
        },
        {
          author: 'Глеб Самойлов',
          date: new Date(2020, 11, 1),
          comment: 'Это потому что ты ее еду съел',
          likes: 672,
        },
        {
          author: 'Вадим Самойлов',
          date: new Date(2020, 10, 30),
          comment: 'Опасайтесь соседскую собаку, она мне в тапок нагадила',
          likes: 0,
        },
      ],
    },
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOPIC':
      return [
        ...state,
        {
          id: Date.now(),
          author: 'admin',
          header: action.topic.header,
          text: action.topic.text || '',
          tags: action.topic.tags || [],
          date: new Date(),
          topicData: { likes: 0, pollId: 0, comments: [] },
        },
      ];
    case 'ADD_COMMENT': {
      const topicIndex = state.findIndex((x) => x.id.toString() === action.comment.topicId);
      const newState = [...state];
      newState[topicIndex].topicData.comments.push({
        author: 'admin',
        date: new Date(),
        comment: action.comment.comment,
        likes: 0,
      });
      return newState;
    }
    default:
      return state;
  }
};

const TopicsProvider = ({ children }) => {
  const [topics, dispatch] = useReducer(reducer, defaultTopics);

  return <TopicsContext.Provider value={{ topics, dispatch }}>{children}</TopicsContext.Provider>;
};

export default TopicsProvider;
