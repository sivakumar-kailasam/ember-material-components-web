import Component from '@ember/component';
import events from '../utils/global-event-handlers';
import MDCComponent from '../mixins/mdc-component';
import layout from '../templates/components/mdc-fab';

export default Component.extend(MDCComponent, {
  //region Attributes
  /**
   * @type {Boolean}
   */
  mini: false,
  /**
   * @type {Boolean}
   */
  plain: false,
  /**
   * @type {Boolean}
   */
  disabled: false,
  /**
   * @type {?String}
   */
  'aria-label': null,
  //endregion

  //region Ember Hooks
  layout,
  tagName: 'button',
  classNames: ['mdc-fab'],
  attributeBindings: ['aria-label', 'disabled', 'type', 'style', ...events],
  classNameBindings: ['mini:mdc-fab--mini', 'plain:mdc-fab--plain', 'mdcClassNames'],
  //endregion

  //region Properties
  ripple: true
  //endregion
});
