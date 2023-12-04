import { Serializer as ОсновПоказатSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-na-generaciyu-основ-показат';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОсновПоказатSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
