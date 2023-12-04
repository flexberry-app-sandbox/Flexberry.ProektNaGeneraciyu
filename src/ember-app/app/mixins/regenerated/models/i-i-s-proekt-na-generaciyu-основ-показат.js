import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  выручЗаГостя: DS.attr('number'),
  выручЗаОдинН: DS.attr('number'),
  выручкаОбщ: DS.attr('number'),
  заполняемость: DS.attr('number'),
  срКолвоГостВНо: DS.attr('number'),
  срЦена: DS.attr('number')
});

export let ValidationRules = {
  выручЗаГостя: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-основ-показат.validations.выручЗаГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  выручЗаОдинН: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-основ-показат.validations.выручЗаОдинН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  выручкаОбщ: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-основ-показат.validations.выручкаОбщ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заполняемость: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-основ-показат.validations.заполняемость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  срКолвоГостВНо: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-основ-показат.validations.срКолвоГостВНо.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  срЦена: {
    descriptionKey: 'models.i-i-s-proekt-na-generaciyu-основ-показат.validations.срЦена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОсновПоказатE', 'i-i-s-proekt-na-generaciyu-основ-показат', {
    выручЗаГостя: attr('Выруч за гостя', { index: 0 }),
    срЦена: attr('Ср цена', { index: 1 }),
    выручЗаОдинН: attr('Выруч за один Н', { index: 2 }),
    выручкаОбщ: attr('Выручка общ', { index: 3 }),
    срКолвоГостВНо: attr('Ср колво гост в но', { index: 4 }),
    заполняемость: attr('Заполняемость', { index: 5 })
  });

  modelClass.defineProjection('ОсновПоказатL', 'i-i-s-proekt-na-generaciyu-основ-показат', {
    выручЗаГостя: attr('Выруч за гостя', { index: 0 }),
    срЦена: attr('Ср цена', { index: 1 }),
    выручЗаОдинН: attr('Выруч за один Н', { index: 2 }),
    выручкаОбщ: attr('Выручка общ', { index: 3 }),
    срКолвоГостВНо: attr('Ср колво гост в но', { index: 4 }),
    заполняемость: attr('Заполняемость', { index: 5 })
  });
};
