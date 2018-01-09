import Component from '@ember/component';
import events from '../../../utils/global-event-handlers';
import layout from '../../../templates/components/mdc-list/item/text';

export default Component.extend({
  //region Ember Hooks
  layout,
  tagName: 'span',
  classNames: ['mdc-list-item__text'],
  attributeBindings: [...events]
  //endregion
});
