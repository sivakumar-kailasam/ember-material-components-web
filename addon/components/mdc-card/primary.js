import Component from '@ember/component';
import layout from '../../templates/components/mdc-card/primary';

export default Component.extend({
  //region Ember Hooks
  layout,
  tagName: 'section',
  classNames: ['mdc-card__primary']
  //endregion
});
