import Component from '@ember/component';
import layout from '../../../../templates/components/mdc-grid-list/tiles/tile/secondary';

export default Component.extend({
  //region Ember Hooks
  layout,
  tagName: 'span',
  classNames: ['mdc-grid-tile__secondary']
  //endregion
});
