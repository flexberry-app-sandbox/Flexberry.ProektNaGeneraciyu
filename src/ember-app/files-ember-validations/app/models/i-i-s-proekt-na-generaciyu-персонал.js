import {
  defineNamespace,
  defineProjections,
  Model as ПерсоналMixin
} from '../mixins/regenerated/models/i-i-s-proekt-na-generaciyu-персонал';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПерсоналMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
