import Component from '@ember/component';
import events from '../../utils/global-event-handlers';
import layout from '../../templates/components/mdc-list/divider';

export default Component.extend({
  //region Attributes
  /**
   * @type {Boolean}
   */
  inset: false,
  //endregion

  //region Ember Hooks
  layout,
  tagName: 'li',
  classNames: ['mdc-list-divider'],
  classNameBindings: ['inset:mdc-list-divider--inset'],
  attributeBindings: ['role', ...events],
  //endregion

  //region Properties
  role: 'separator',
  //endregion
});
