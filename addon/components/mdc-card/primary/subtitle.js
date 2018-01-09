import Component from '@ember/component';
import events from '../../../utils/global-event-handlers';
import layout from '../../../templates/components/mdc-card/primary/subtitle';

export default Component.extend({
  //region Ember Hooks
  layout,
  classNames: ['mdc-card__subtitle'],
  attributeBindings: [...events]
  //endregion
});
