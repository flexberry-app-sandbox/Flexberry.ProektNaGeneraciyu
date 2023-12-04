import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  возраст: DS.attr('number'),
  датаРожд: DS.attr('string'),
  национальн: DS.attr('string'),
  образование: DS.attr('string'),
  пол: DS.attr('string'),
  семейнПол: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  возраст: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-целевая-аудит.validations.возраст.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаРожд: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-целевая-аудит.validations.датаРожд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  национальн: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-целевая-аудит.validations.национальн.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  образование: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-целевая-аудит.validations.образование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-целевая-аудит.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  семейнПол: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-целевая-аудит.validations.семейнПол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-целевая-аудит.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЦелеваяАудитE', 'i-i-s-proekt-na-generaciyu-целевая-аудит', {
    пол: attr('Пол', { index: 0 }),
    национальн: attr('Национальн', { index: 1 }),
    возраст: attr('Возраст', { index: 2 }),
    семейнПол: attr('Семейн пол', { index: 3 }),
    образование: attr('Образование', { index: 4 }),
    датаРожд: attr('Дата рожд', { index: 5 }),
    фИО: attr('ФИО', { index: 6 })
  });

  modelClass.defineProjection('ЦелеваяАудитL', 'i-i-s-proekt-na-generaciyu-целевая-аудит', {
    пол: attr('Пол', { index: 0 }),
    национальн: attr('Национальн', { index: 1 }),
    возраст: attr('Возраст', { index: 2 }),
    семейнПол: attr('Семейн пол', { index: 3 }),
    образование: attr('Образование', { index: 4 }),
    датаРожд: attr('Дата рожд', { index: 5 }),
    фИО: attr('ФИО', { index: 6 })
  });
};
