import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-na-generaciyu-основ-показат', 'Unit | Model | i-i-s-proekt-na-generaciyu-основ-показат', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
