import Component from '@ember/component';
import layout from '../../templates/components/mdc-list/item';

export default Component.extend({
  //region Ember Hooks
  layout,
  tagName: 'li',
  classNames: ['mdc-list-item']
  //endregion
});
