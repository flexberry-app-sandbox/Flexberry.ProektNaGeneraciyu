import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proekt-na-generaciyu.caption'),
          title: i18n.t('forms.application.sitemap.proekt-na-generaciyu.title'),
          children: [{
            link: 'i-i-s-proekt-na-generaciyu-должность-l',
            caption: i18n.t('forms.application.sitemap.proekt-na-generaciyu.i-i-s-proekt-na-generaciyu-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-na-generaciyu.i-i-s-proekt-na-generaciyu-должность-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-proekt-na-generaciyu-целевая-аудит-l',
            caption: i18n.t('forms.application.sitemap.proekt-na-generaciyu.i-i-s-proekt-na-generaciyu-целевая-аудит-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-na-generaciyu.i-i-s-proekt-na-generaciyu-целевая-аудит-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-proekt-na-generaciyu-маркетолог-l',
            caption: i18n.t('forms.application.sitemap.proekt-na-generaciyu.i-i-s-proekt-na-generaciyu-маркетолог-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-na-generaciyu.i-i-s-proekt-na-generaciyu-маркетолог-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-proekt-na-generaciyu-основ-показат-l',
            caption: i18n.t('forms.application.sitemap.proekt-na-generaciyu.i-i-s-proekt-na-generaciyu-основ-показат-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-na-generaciyu.i-i-s-proekt-na-generaciyu-основ-показат-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-proekt-na-generaciyu-персонал-l',
            caption: i18n.t('forms.application.sitemap.proekt-na-generaciyu.i-i-s-proekt-na-generaciyu-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-na-generaciyu.i-i-s-proekt-na-generaciyu-персонал-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-proekt-na-generaciyu-спрос-l',
            caption: i18n.t('forms.application.sitemap.proekt-na-generaciyu.i-i-s-proekt-na-generaciyu-спрос-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-na-generaciyu.i-i-s-proekt-na-generaciyu-спрос-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})