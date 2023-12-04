import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  основПоказат: DS.belongsTo('i-i-s-proekt-na-generaciyu-основ-показат', { inverse: null, async: false }),
  спрос: DS.belongsTo('i-i-s-proekt-na-generaciyu-спрос', { inverse: null, async: false }),
  целеваяАудит: DS.belongsTo('i-i-s-proekt-na-generaciyu-целевая-аудит', { inverse: null, async: false })
});

export let ValidationRules = {
  основПоказат: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-маркетолог.validations.основПоказат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрос: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-маркетолог.validations.спрос.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  целеваяАудит: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-маркетолог.validations.целеваяАудит.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-proekt-na-generaciyu-персонал'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МаркетологE', 'i-i-s-proekt-na-generaciyu-маркетолог', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    спрос: belongsTo('i-i-s-proekt-na-generaciyu-спрос', 'Спрос', {
      категорНомера: attr('Категор номера', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'категорНомера' }),
    основПоказат: belongsTo('i-i-s-proekt-na-generaciyu-основ-показат', 'Основ показат', {
      выручЗаГостя: attr('Выруч за гостя', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'выручЗаГостя' }),
    целеваяАудит: belongsTo('i-i-s-proekt-na-generaciyu-целевая-аудит', 'Целевая аудит', {
      пол: attr('Пол', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'пол' }),
    должность: belongsTo('i-i-s-proekt-na-generaciyu-должность', 'Должность', {
      наименование: attr('Наименование', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('МаркетологL', 'i-i-s-proekt-na-generaciyu-маркетолог', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    спрос: belongsTo('i-i-s-proekt-na-generaciyu-спрос', 'Категор номера', {
      категорНомера: attr('Категор номера', { index: 2 })
    }, { index: -1, hidden: true }),
    основПоказат: belongsTo('i-i-s-proekt-na-generaciyu-основ-показат', 'Выруч за гостя', {
      выручЗаГостя: attr('Выруч за гостя', { index: 3 })
    }, { index: -1, hidden: true }),
    целеваяАудит: belongsTo('i-i-s-proekt-na-generaciyu-целевая-аудит', 'Пол', {
      пол: attr('Пол', { index: 4 })
    }, { index: -1, hidden: true }),
    должность: belongsTo('i-i-s-proekt-na-generaciyu-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
