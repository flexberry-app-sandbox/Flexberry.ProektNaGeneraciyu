import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProekt_na_generaciyuДолжностьLForm from './forms/i-i-s-proekt-na-generaciyu-должность-l';
import IISProekt_na_generaciyuМаркетологLForm from './forms/i-i-s-proekt-na-generaciyu-маркетолог-l';
import IISProekt_na_generaciyuОсновПоказатLForm from './forms/i-i-s-proekt-na-generaciyu-основ-показат-l';
import IISProekt_na_generaciyuПерсоналLForm from './forms/i-i-s-proekt-na-generaciyu-персонал-l';
import IISProekt_na_generaciyuСпросLForm from './forms/i-i-s-proekt-na-generaciyu-спрос-l';
import IISProekt_na_generaciyuЦелеваяАудитLForm from './forms/i-i-s-proekt-na-generaciyu-целевая-аудит-l';
import IISProekt_na_generaciyuДолжностьEForm from './forms/i-i-s-proekt-na-generaciyu-должность-e';
import IISProekt_na_generaciyuМаркетологEForm from './forms/i-i-s-proekt-na-generaciyu-маркетолог-e';
import IISProekt_na_generaciyuОсновПоказатEForm from './forms/i-i-s-proekt-na-generaciyu-основ-показат-e';
import IISProekt_na_generaciyuПерсоналEForm from './forms/i-i-s-proekt-na-generaciyu-персонал-e';
import IISProekt_na_generaciyuСпросEForm from './forms/i-i-s-proekt-na-generaciyu-спрос-e';
import IISProekt_na_generaciyuЦелеваяАудитEForm from './forms/i-i-s-proekt-na-generaciyu-целевая-аудит-e';
import IISProekt_na_generaciyuДолжностьModel from './models/i-i-s-proekt-na-generaciyu-должность';
import IISProekt_na_generaciyuМаркетологModel from './models/i-i-s-proekt-na-generaciyu-маркетолог';
import IISProekt_na_generaciyuОсновПоказатModel from './models/i-i-s-proekt-na-generaciyu-основ-показат';
import IISProekt_na_generaciyuПерсоналModel from './models/i-i-s-proekt-na-generaciyu-персонал';
import IISProekt_na_generaciyuСпросModel from './models/i-i-s-proekt-na-generaciyu-спрос';
import IISProekt_na_generaciyuЦелеваяАудитModel from './models/i-i-s-proekt-na-generaciyu-целевая-аудит';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt-na-generaciyu-должность': IISProekt_na_generaciyuДолжностьModel,
    'i-i-s-proekt-na-generaciyu-маркетолог': IISProekt_na_generaciyuМаркетологModel,
    'i-i-s-proekt-na-generaciyu-основ-показат': IISProekt_na_generaciyuОсновПоказатModel,
    'i-i-s-proekt-na-generaciyu-персонал': IISProekt_na_generaciyuПерсоналModel,
    'i-i-s-proekt-na-generaciyu-спрос': IISProekt_na_generaciyuСпросModel,
    'i-i-s-proekt-na-generaciyu-целевая-аудит': IISProekt_na_generaciyuЦелеваяАудитModel
  },

  'application-name': 'Proekt_na_generaciyu',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proekt_na_generaciyu',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt_na_generaciyu',
          title: 'Proekt_na_generaciyu'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'proekt-na-generaciyu': {
          caption: 'Proekt_na_generaciyu',
          title: 'Proekt_na_generaciyu',
          'i-i-s-proekt-na-generaciyu-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-proekt-na-generaciyu-целевая-аудит-l': {
            caption: 'Целевая аудит',
            title: ''
          },
          'i-i-s-proekt-na-generaciyu-маркетолог-l': {
            caption: 'Маркетолог',
            title: ''
          },
          'i-i-s-proekt-na-generaciyu-основ-показат-l': {
            caption: 'Основ показат',
            title: ''
          },
          'i-i-s-proekt-na-generaciyu-персонал-l': {
            caption: 'Персонал',
            title: ''
          },
          'i-i-s-proekt-na-generaciyu-спрос-l': {
            caption: 'Спрос',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proekt-na-generaciyu-должность-l': IISProekt_na_generaciyuДолжностьLForm,
    'i-i-s-proekt-na-generaciyu-маркетолог-l': IISProekt_na_generaciyuМаркетологLForm,
    'i-i-s-proekt-na-generaciyu-основ-показат-l': IISProekt_na_generaciyuОсновПоказатLForm,
    'i-i-s-proekt-na-generaciyu-персонал-l': IISProekt_na_generaciyuПерсоналLForm,
    'i-i-s-proekt-na-generaciyu-спрос-l': IISProekt_na_generaciyuСпросLForm,
    'i-i-s-proekt-na-generaciyu-целевая-аудит-l': IISProekt_na_generaciyuЦелеваяАудитLForm,
    'i-i-s-proekt-na-generaciyu-должность-e': IISProekt_na_generaciyuДолжностьEForm,
    'i-i-s-proekt-na-generaciyu-маркетолог-e': IISProekt_na_generaciyuМаркетологEForm,
    'i-i-s-proekt-na-generaciyu-основ-показат-e': IISProekt_na_generaciyuОсновПоказатEForm,
    'i-i-s-proekt-na-generaciyu-персонал-e': IISProekt_na_generaciyuПерсоналEForm,
    'i-i-s-proekt-na-generaciyu-спрос-e': IISProekt_na_generaciyuСпросEForm,
    'i-i-s-proekt-na-generaciyu-целевая-аудит-e': IISProekt_na_generaciyuЦелеваяАудитEForm
  },

});

export default translations;
