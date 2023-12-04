import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  броньЧерСайт: DS.attr('boolean'),
  занятВМесяц: DS.attr('number'),
  категорНомера: DS.attr('number'),
  номер: DS.attr('number'),
  скВторНомер: DS.attr('boolean'),
  скДр: DS.attr('boolean'),
  скПриДлитПрож: DS.attr('boolean'),
  суммСоСкид: DS.attr('number'),
  цена: DS.attr('number'),
  юридич: DS.attr('boolean')
});

export let ValidationRules = {
  броньЧерСайт: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-спрос.validations.броньЧерСайт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  занятВМесяц: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-спрос.validations.занятВМесяц.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  категорНомера: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-спрос.validations.категорНомера.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-спрос.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  скВторНомер: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-спрос.validations.скВторНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  скДр: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-спрос.validations.скДр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  скПриДлитПрож: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-спрос.validations.скПриДлитПрож.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммСоСкид: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-спрос.validations.суммСоСкид.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-спрос.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  юридич: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-спрос.validations.юридич.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпросE', 'i-i-s-proekt-na-generaciyu-спрос', {
    категорНомера: attr('Категор номера', { index: 0 }),
    скДр: attr('Ск др', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    броньЧерСайт: attr('Бронь чер сайт', { index: 3 }),
    скПриДлитПрож: attr('Ск при длит прож', { index: 4 }),
    занятВМесяц: attr('Занят в месяц', { index: 5 }),
    суммСоСкид: attr('Сумм со скид', { index: 6 }),
    номер: attr('Номер', { index: 7 }),
    скВторНомер: attr('Ск втор номер', { index: 8 }),
    юридич: attr('Юридич', { index: 9 })
  });

  modelClass.defineProjection('СпросL', 'i-i-s-proekt-na-generaciyu-спрос', {
    категорНомера: attr('Категор номера', { index: 0 }),
    скДр: attr('Ск др', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    броньЧерСайт: attr('Бронь чер сайт', { index: 3 }),
    скПриДлитПрож: attr('Ск при длит прож', { index: 4 }),
    занятВМесяц: attr('Занят в месяц', { index: 5 }),
    суммСоСкид: attr('Сумм со скид', { index: 6 }),
    номер: attr('Номер', { index: 7 }),
    скВторНомер: attr('Ск втор номер', { index: 8 }),
    юридич: attr('Юридич', { index: 9 })
  });
};
