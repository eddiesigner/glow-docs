# Buttons and Forms

The theme includes styles for buttons and form elements such as `<label>`, `<input>`, `<textarea>`, `<select>`, `<input type="checkbox">` and `<input type="radio">`. These styles are global and are available on all pages.

## Button

To apply the theme styles to a button or a link, ensure that you include the `gl-button` class in the respective element, like this:

```html
<!-- Button -->
<button class="gl-button">
  Button example
</button>

<!-- Link -->
<a href="#" class="gl-button">
  Link example
</a>
```

You can add the `secondary` class to the button or link to apply the secondary style and the `small` class to make it smaller, like this:

```html
<!-- Secondary -->
<button class="gl-button secondary">
  Secondary button
</button>

<!-- Small -->
<a href="#" class="gl-button small">
  Small link
</a>
```

## Label

To apply the theme styles to a `<label>`, ensure that you include the `gl-label` class in the respective element, like this:

```html
<!-- Label -->
<label for="username" class="gl-label">Enter your username:</label>
<input id="username" name="username" type="text" class="gl-field" />
```

## Input and Textarea

To apply the theme styles to an `<input>` field or `<textarea>`, ensure that you include the `gl-field` class in the respective element, like this:

```html
<!-- Input field -->
<input type="text" class="gl-field" />

<!-- Textarea -->
<textarea class="gl-field"></textarea>
```

## Select

To include a `<select>` field, utilize HTML code similar to the following:

```html
<!-- Select field -->
<div class="gl-select-container">
  <select class="gl-field">
    <option value="1">First option</option>
    <option value="2">Second option</option>
    <option value="3">Third option</option>
  </select>
  <span></span>
</div>
```

Please always keep in mind that the container with the class `gl-select-container` is essential and cannot be omitted. The `<select>` element must have the class `gl-field`, and an additional `<span>` should be added immediately after the `<select>` to ensure the chevron is displayed correctly.

## Checkbox

To add an `<input>` of type `checkbox`, you should use HTML code similar to the following:

```html
<!-- Checkbox -->
<label class="gl-checkbox">
  <div>
    <input type="checkbox" value="1">
    <span></span>
  </div>
  Checkbox label
</label>
```

To ensure that the field is accessible and adopts the styles of the theme, it's important that the `<label>` wraps around the other elements and has the `gl-checkbox` class. Inside it, include a `<div>` element that, in turn, wraps around the `<input>` with the `checkbox` type, followed by an empty `<span>`.

## Radio Button

To add an `<input>` of type `radio`, you should use HTML code similar to the following:

```html
<!-- Radio button -->
<label class="gl-radio">
  <div>
    <input type="radio" value="1">
    <span></span>
  </div>
  Radio button label
</label>
```

To ensure that the radio button is accessible and adopts the styles of the theme, it's important that the `<label>` wraps around the other elements and has the `gl-radio` class. Inside it, include a `<div>` element that, in turn, wraps around the `<input>` with the `radio` type, followed by an empty `<span>`.
