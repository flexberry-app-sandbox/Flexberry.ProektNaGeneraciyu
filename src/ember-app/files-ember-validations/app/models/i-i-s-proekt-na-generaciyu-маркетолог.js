import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as МаркетологMixin
} from '../mixins/regenerated/models/i-i-s-proekt-na-generaciyu-маркетолог';

import ПерсоналModel from './i-i-s-proekt-na-generaciyu-персонал';

let Model = ПерсоналModel.extend(МаркетологMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
