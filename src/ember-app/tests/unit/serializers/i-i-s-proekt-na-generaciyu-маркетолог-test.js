import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-na-generaciyu-маркетолог', 'Unit | Serializer | i-i-s-proekt-na-generaciyu-маркетолог', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proekt-na-generaciyu-маркетолог',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-proekt-na-generaciyu-должность',
    'model:i-i-s-proekt-na-generaciyu-маркетолог',
    'model:i-i-s-proekt-na-generaciyu-основ-показат',
    'model:i-i-s-proekt-na-generaciyu-персонал',
    'model:i-i-s-proekt-na-generaciyu-спрос',
    'model:i-i-s-proekt-na-generaciyu-целевая-аудит',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
