import Component from '@ember/component';
import layout from '../../../templates/components/mdc-grid-list/tiles/tile';

export default Component.extend({
  //region Ember Hooks
  layout,
  tagName: 'li',
  classNames: ['mdc-grid-tile']
  //endregion
});
