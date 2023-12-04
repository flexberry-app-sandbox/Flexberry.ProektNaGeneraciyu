import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as МаркетологMixin
} from '../mixins/regenerated/models/i-i-s-proekt-na-generaciyu-маркетолог';

import ПерсоналModel from './i-i-s-proekt-na-generaciyu-персонал';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-proekt-na-generaciyu-персонал';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ПерсоналModel.extend(МаркетологMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
