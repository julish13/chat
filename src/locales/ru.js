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
      channelNameLength: 'От 3 до 20 символов',
      usernameLength: 'От 3 до 20 символов',
      passwordLength: 'Не менее 6 символов',
      passwordConfirmation: 'Пароли должны совпадать',
      signupUniqueness: 'Такой пользователь уже существует',
    },
    login: {
      enter: 'Войти',
      username: 'Ваш ник',
      password: 'Пароль',
      footer: {
        text: 'Нет аккаунта?',
        signupLink: 'Регистрация',
      },
    },
    signup: {
      title: 'Регистрация',
      username: 'Имя пользователя',
      password: 'Пароль',
      passwordConfirmation: 'Подтвердите пароль',
      submit: 'Зарегистрироваться',
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
      channelNaming: {
        newChannelTitle: 'Добавить канал',
        renameChannelTitle: 'Переименовать канал',
        label: 'Имя канала',
        cancel: 'Отменить',
        submit: 'Отправить',
      },
      removeChannel: {
        title: 'Удалить канал',
        text: 'Уверены?',
        cancel: 'Отменить',
        submit: 'Удалить',
      },
    },
  },
};
