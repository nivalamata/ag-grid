---
title: "Customising Inputs & Widgets"
---

Style text inputs, checkboxes, toggle buttons and range sliders. 

## Styling Text Inputs

Text inputs can be styled with a combination of CSS variables and selectors:

```css
.ag-theme-quartz {
    --ag-borders-input: dotted 2px;
    --ag-input-border-color: orange;
}
.ag-theme-quartz .ag-text-field-input {
    background-color: rgb(255, 209, 123); /* light orange */
}
.ag-theme-quartz .ag-text-field-input::placeholder {
    color: rgb(155, 101, 1); /* darker orange */
}
```

<grid-example title='Text Input Styling' name='text-inputs' type='generated' options='{ "exampleHeight": 450, "enterprise": true, "modules": ["clientside", "rowgrouping", "menu", "setfilter", "columnpanel", "filterpanel"]  }'></grid-example>

The CSS variables relevant to styling text inputs are:

<api-documentation source='global-style-customisation-variables/resources/variables.json' section='variables' names='["--ag-borders-input", "--ag-input-border-color", "--ag-input-disabled-border-color", "--ag-input-disabled-background-color", "--ag-input-focus-box-shadow", "--ag-input-focus-border-color", "--ag-invalid-color", "--ag-input-border-color-invalid", "--ag-borders-input-invalid"]' config='{"maxLeftColumnWidth": 35, "hideHeader": true}'></api-documentation>

## Styling Checkboxes

The default styles of the grid disable the browser's native checkbox widget and create a custom appearance using icon fonts (see below for how to disable this).

See the [Custom Icons](/custom-icons/) documentation for how to replace the checkbox icons - the icons used are `checkbox-checked`, `checkbox-unchecked`, `checkbox-indeterminate`.

The colours can be controlled using the following CSS Variables:

```css
.ag-theme-quartz {
    --ag-checkbox-background-color: yellow;
    --ag-checkbox-checked-color: red;
    --ag-checkbox-unchecked-color: darkred;
    --ag-checkbox-indeterminate-color: grey;
}
```

<grid-example title='Checkbox Styling' name='checkboxes' type='generated' options='{ "exampleHeight": 450, "enterprise": true, "modules": ["clientside", "rowgrouping", "menu", "setfilter", "columnpanel", "filterpanel"]  }'></grid-example>

### Styling Radio Buttons

Radio Buttons, such as those in the chart settings UI, are specialised checkboxes. They respond to the same colour variables as demonstrated above. They use the `radio-button-on` and `radio-button-off` icons.

### Styling Toggle Buttons

Toggle Buttons, such as the "Pivot Mode" toggle in the above example, are specialised checkboxes. They respond to the same checkbox colour variables. In addition, they expose a few more variables for advanced customisation:

<api-documentation source='global-style-customisation-variables/resources/variables.json' section='variables' names='["--ag-toggle-button-off-border-color", "--ag-toggle-button-off-background-color", "--ag-toggle-button-on-border-color", "--ag-toggle-button-on-background-color", "--ag-toggle-button-switch-background-color", "--ag-toggle-button-switch-border-color", "--ag-toggle-button-border-width", "--ag-toggle-button-height", "--ag-toggle-button-width"]' config='{"maxLeftColumnWidth": 35, "hideHeader": true}'></api-documentation>

## Using Browser Native Checkboxes or Creating Your Own

The default styles in `ag-grid.css` contain many CSS rules to implement the `--ag-checkbox-*` and `--ag-toggle-button-*` variables described above. If you want to use the browser's default UI or create your own then it's easier to start from a blank slate rather than attempting to override the default styles.

To achieve this, use the `ag-grid-no-native-widgets.css` CSS file instead of `ag-grid.css`.

Users of the Sass API can pass `suppress-native-widget-styling: true` to accomplish this.
