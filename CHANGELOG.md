# MDC-Ember Changelog

### 0.0.36 Emerald English setter (September 7, 2017)

- :arrow_up: Upgrade @material packages to 0.19 versions
    - :boom: Change "accent" to "secondary" globally, as done by MDC-Web.
      https://github.com/material-components/material-components-web/pull/1116
    - :sparkles: `{{mdc-button}}` now has `unelevated` boolean attribute (default: `false`)
    - :sparkles: `{{mdc-button}}` now has `dense` boolean attribute (default: `false`)
    - :sparkles: `{{mdc-button}}` now has `compact` boolean attribute (default: `false`)
    - :sparkles: `{{mdc-textfield}}` now has `box` boolean attribute (default: `false`)
- :bug: `{{mdc-checkbox}}`, `{{mdc-radio}}`, and `{{mdc-switch}}` now respect checked attr (#29)
- :green_heart: Switch CI to use Headless Chrome (#28)
- :sparkles: Event bubbling can be disabled for checkboxes, radio buttons, and switches (#27)

#### Breaking Changes
- :boom: In the spec, "accent" color was renamed to "secondary" to be more
  semantically correct. All occurrences of the word "accent" have been
  changed to "secondary", in line with MDC-Web's [breaking
  change](https://github.com/material-components/material-components-web/pull/1116)
  to @material/theme.

### 0.0.35 Diamond Doberman (August 30, 2017)

- :bug: Fix unsafe HTML element access
- :sparkles: Dark theme can be used for tab bars and tab bar scrollers (#26)
- :zap: Don't unnecessarily (de|re)-attach handlers (#25)
- :sparkles: Implement tab-bar-scroller from @material/tabs (#21)
- :sparkles: Implement @material/switch (#24)

### 0.0.34 Citrine Chihuahua (July 14, 2017)

- :sparkles: Implement @material/linear-progress (#20)

### 0.0.33 Beryl Beagle (July 3, 2017)

- :fire: Remove isDevelopingAddon
- :bug: Fix bug in ripple adapter
- :arrow_up: Upgrade @material/ripple to 0.7.0
- :arrow_up: Upgrade @material/toolbar to 0.4.1

### 0.0.32 Agate Akita (June 28, 2017)

- :arrow_up: upgrade to @material/menu 0.4.0 (#18)
- :memo: Create CONTRIBUTING.md
- :memo: Update README.md

