import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proekt-na-generaciyu-должность-l');
  this.route('i-i-s-proekt-na-generaciyu-должность-e',
  { path: 'i-i-s-proekt-na-generaciyu-должность-e/:id' });
  this.route('i-i-s-proekt-na-generaciyu-должность-e.new',
  { path: 'i-i-s-proekt-na-generaciyu-должность-e/new' });
  this.route('i-i-s-proekt-na-generaciyu-маркетолог-l');
  this.route('i-i-s-proekt-na-generaciyu-маркетолог-e',
  { path: 'i-i-s-proekt-na-generaciyu-маркетолог-e/:id' });
  this.route('i-i-s-proekt-na-generaciyu-маркетолог-e.new',
  { path: 'i-i-s-proekt-na-generaciyu-маркетолог-e/new' });
  this.route('i-i-s-proekt-na-generaciyu-основ-показат-l');
  this.route('i-i-s-proekt-na-generaciyu-основ-показат-e',
  { path: 'i-i-s-proekt-na-generaciyu-основ-показат-e/:id' });
  this.route('i-i-s-proekt-na-generaciyu-основ-показат-e.new',
  { path: 'i-i-s-proekt-na-generaciyu-основ-показат-e/new' });
  this.route('i-i-s-proekt-na-generaciyu-персонал-l');
  this.route('i-i-s-proekt-na-generaciyu-персонал-e',
  { path: 'i-i-s-proekt-na-generaciyu-персонал-e/:id' });
  this.route('i-i-s-proekt-na-generaciyu-персонал-e.new',
  { path: 'i-i-s-proekt-na-generaciyu-персонал-e/new' });
  this.route('i-i-s-proekt-na-generaciyu-спрос-l');
  this.route('i-i-s-proekt-na-generaciyu-спрос-e',
  { path: 'i-i-s-proekt-na-generaciyu-спрос-e/:id' });
  this.route('i-i-s-proekt-na-generaciyu-спрос-e.new',
  { path: 'i-i-s-proekt-na-generaciyu-спрос-e/new' });
  this.route('i-i-s-proekt-na-generaciyu-целевая-аудит-l');
  this.route('i-i-s-proekt-na-generaciyu-целевая-аудит-e',
  { path: 'i-i-s-proekt-na-generaciyu-целевая-аудит-e/:id' });
  this.route('i-i-s-proekt-na-generaciyu-целевая-аудит-e.new',
  { path: 'i-i-s-proekt-na-generaciyu-целевая-аудит-e/new' });
});

export default Router;
