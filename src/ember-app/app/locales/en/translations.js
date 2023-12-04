import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proekt_na_generaciyu',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt_na_generaciyu',
          title: 'Proekt_na_generaciyu'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
