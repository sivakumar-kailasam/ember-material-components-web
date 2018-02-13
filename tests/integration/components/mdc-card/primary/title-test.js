import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdc-card/primary/title', 'Integration | Component | mdc card/primary/title', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdc-card/primary/title}}`);

  assert.equal(find('*').textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdc-card/primary/title}}
      template block text
    {{/mdc-card/primary/title}}
  `);

  assert.equal(find('*').textContent.trim(), 'template block text');
});
