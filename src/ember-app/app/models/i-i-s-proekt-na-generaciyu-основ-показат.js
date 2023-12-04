import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОсновПоказатMixin
} from '../mixins/regenerated/models/i-i-s-proekt-na-generaciyu-основ-показат';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОсновПоказатMixin, Validations, {
});

defineProjections(Model);

export default Model;
