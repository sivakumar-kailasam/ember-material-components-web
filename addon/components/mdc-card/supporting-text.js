import Component from '@ember/component';
import layout from '../../templates/components/mdc-card/supporting-text';

export default Component.extend({
  //region Ember Hooks
  layout,
  tagName: 'section',
  classNames: ['mdc-card__supporting-text']
  //endregion
});
