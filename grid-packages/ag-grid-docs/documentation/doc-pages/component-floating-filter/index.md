---
title: "Floating Filter Component"
---

<framework-specific-section frameworks="javascript,angular,vue">
|Floating Filter Components allow you to add your own floating filter types to AG Grid. You can create a Custom Floating Filter Component to work alongside one of the grid's Provided Filters, or alongside a Custom Filter.
</framework-specific-section>

<framework-specific-section frameworks="react">
<video-section id="CxwfX4KodaM" title="React Floating Filters" header="true">
Floating Filter Components allow you to add your own floating filter types to AG Grid. You can create a Custom Floating Filter Component to work alongside one of the grid's Provided Filters, or alongside a Custom Filter.
</video-section>
</framework-specific-section>

## Example: Custom Floating Filter

In the following example you can see how the Gold, Silver, Bronze and Total columns have a custom floating filter `NumberFloatingFilter`. This filter substitutes the standard floating filter for an input box that the user can change to adjust how many medals of each column to filter by based on a greater than filter.

<grid-example title='Custom Floating Filter' name='custom-floating-filter' type='mixed' options='{ "includeNgFormsModule" : true}'></grid-example>

## Implementing a Floating Filter Component

md-include:component-interface-javascript.md
md-include:component-interface-angular.md
md-include:component-interface-react.md
md-include:component-interface-vue.md

<framework-specific-section frameworks="javascript,angular,vue">
<interface-documentation interfaceName='IFloatingFilterParams'></interface-documentation>
</framework-specific-section>

## Floating Filter Lifecycle

Floating filters do not contain filter logic themselves, they are just an additional UI component for the underlying filter component. For this reason, the floating filters lifecycle is bound to the visibility of the column; if you hide a column (either set not visible, or horizontally scroll the column out of view) then the floating filter UI component is destroyed. If the column comes back into view, it is created again. This is different to column filters, where the column filter will exist as long as the column exists, regardless of the column's visibility.

To see examples of the different ways to implement floating filters please refer to the examples below.

<framework-specific-section frameworks="javascript,angular,vue">
<h2 id="floating-filter-methods-on-provided-filters">Floating Filter Methods on Provided Filters</h2>
</framework-specific-section>

<framework-specific-section frameworks="javascript,angular,vue">
|When the user interacts with a floating filter, the floating filter must set the state of the main parent filter in order for filter changes to take effect This is done by the floating filter getting a reference to the parent filter instance and calling a method on it.
|
|If you create your own filter and floating filter, it is up to you which method you expose on the filter for the floating filter to call. This contract is between the filter and the floating filter and doesn't go through the grid.
|
|The Simple Filters (Text, Number, Date) provide methods that the corresponding provided floating filters can call. This information is useful if a) you want to create your own floating filter that is paired with a provided parent filter or b) you are just interested to know how the interaction works to help build your own filters and floating filters.
|
|- **Date, Text and Number Filters:** all these filters provide a method `onFloatingFilterChanged(type: string, value: string)` where `type` is the type (`'lessThan'`, `'equals'`, etc.) and the value is the text value to use (the number and date filters will convert the text to the corresponding type).
|
|- **Set Filter:** The floating set filter is not editable, so no method is exposed on the parent filter for the floating filter to call.
|
|You could also call `setModel()` on the filters as an alternative. For example, you could build your own floating filter for the Set Filter that allows picking all European or Asian countries, or you could provide your own Number floating filter that allows selecting ranges (the provided Number floating filter does not allow editing ranges).
</framework-specific-section>

## Example: Custom Filter And Custom Floating Filter

This example extends the previous example by also providing its own custom filter `NumberFilter` in the Gold, Silver, Bronze and Total columns.

<framework-specific-section frameworks="javascript,angular,vue">
|In this example it is important to note that:
|
|1. `NumberFilter.getModel()` returns a `number` representing the current greater than filter.
|1. `NumberFilter.setModel(model)` takes an object that can be of any type. If the value passed is numeric then the filter gets applied with a condition of greater than.
|1. `NumberFloatingFilter.onParentModelChanged(parentModel)` receives the result of `NumberFilter.getModel()` every time the `NumberFilter` model changes.
|1. `NumberFloatingFilter` calls `parentFilter.myMethodForTakingValueFromFloatingFilter(change)` every time the user changes the floating filter value.
|1. `NumberFilter.myMethodForTakingValueFromFloatingFilter(change)` performs the filtering.
</framework-specific-section>

<grid-example title='Custom Filter and Floating Filter' name='custom-filter-and-floating-filter' type='mixed' options='{"includeNgFormsModule" : true}'></grid-example>

## Example: Custom Filter And Read-Only Floating Filter

If you want to provide a custom filter but don't want to provide an equivalent custom floating filter, you can implement `getModelAsString()` and you will get a read-only floating filter for free.

This example uses the previous custom filter but implements `getModelAsString()`. Note how there are no custom floating filters and yet each column using `NumberFilter` (Gold, Silver, Bronze and Total) has a read-only floating filter that gets updated as you change the values from the main filter.

<grid-example title='Custom Filter Only' name='custom-filter' type='mixed'></grid-example>

<framework-specific-section frameworks="react,angular,vue">
<h2 id="sliding-floating-filters">Sliding Floating Filters</h2>
</framework-specific-section>
<framework-specific-section frameworks="react,angular,vue">
|The below example shows how to create a custom floating filter re-using the out-of-the-box Number Filter .
</framework-specific-section>
<framework-specific-section frameworks="react,angular,vue">
<grid-example title='Sliding Floating Filter Component' name='floating-filter-component' type='mixed' options='{ "includeNgFormsModule" : true }'></grid-example>
</framework-specific-section>

<framework-specific-section frameworks="javascript">
<h2 id="complex-example-with-jquery">Complex Example with jQuery</h2>
</framework-specific-section>
<framework-specific-section frameworks="javascript">
|The following example illustrates a complex scenario. All the columns have floating filters. The first 6 columns (Athlete to Sport) have the standard provided floating filters. The last 4 (Gold to Total) have custom filters and custom floating filters that use jQuery sliders.
|
|Note that:
|
|- Athlete has a debounce of 2 seconds (`debounceMs: 2000`)
|- Age has no debounce (`debounceMs: 0`)
|- All the other columns have the standard 500ms debounce
</framework-specific-section>
<framework-specific-section frameworks="javascript">
<grid-example title='Custom Complex Filter and Floating Filter' name='custom-complex-filter-and-floating-filter' type='typescript' options='{ "extras": ["jquery", "jqueryui"] }'></grid-example>
</framework-specific-section>
