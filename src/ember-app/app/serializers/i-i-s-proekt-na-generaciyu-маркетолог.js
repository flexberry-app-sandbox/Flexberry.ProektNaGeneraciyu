import { Serializer as МаркетологSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-na-generaciyu-маркетолог';
import ПерсоналSerializer from './i-i-s-proekt-na-generaciyu-персонал';

export default ПерсоналSerializer.extend(МаркетологSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
