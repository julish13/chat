export default {
  translation: {
    navigation: {
      title: 'Hexlet Chat',
      logout: 'Выйти',
    },
    errorMessages: {
      authentication: 'Неверные имя пользователя или пароль',
      network: 'Ошибка соединения',
      required: 'Обязательное поле',
      unique: 'Должно быть уникальным',
    },
    login: {
      enter: 'Войти',
      username: 'Ваш ник',
      password: 'Пароль',
    },
    chat: {
      channels: {
        title: 'Каналы',
        dropdown: {
          title: 'Управление каналом',
          actions: {
            remove: 'Удалить',
            rename: 'Переименовать',
          },
        },
      },
      counter: {
        count_one: '{{count}} сообщение',
        count_few: '{{count}} сообщения',
        count_many: '{{count}} сообщений',
      },
      input: {
        label: 'Новое сообщение',
        placeholder: 'Введите сообщение...',
        submit: 'Отправить',
      },
    },
    notFound: {
      title: 'Страница не найдена',
      text: 'Но вы можете перейти <1>на главную страницу</1>',
    },
    modals: {
      newChannel: {
        title: 'Добавить канал',
        label: 'Имя канала',
        cancel: 'Отменить',
        submit: 'Отправить',
      },
    },
  },
};
