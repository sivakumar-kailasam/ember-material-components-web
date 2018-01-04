import Component from '@ember/component';
import layout from '../../../templates/components/mdc-card/primary/title';

export default Component.extend({
  //region Attributes
  /**
   * @type {Boolean}
   */
  large: false,
  //endregion

  //region Ember Hooks
  layout,
  classNames: ['mdc-card__title'],
  classNameBindings: ['large:mdc-card__title--large']
  //endregion
});
