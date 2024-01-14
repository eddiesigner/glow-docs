# Code Highlighting

Glow includes code highlighting out of the box (powered by [highlight.js](https://highlightjs.org/)), which means you can display code snippets in your posts, and they will be presented with the appropriate formatting and colors based on the language used. You can see an example in the theme's [style guide](https://glow.eduardogomez.io/style-guide/#code).

## Usage

To use code highlighting in your posts, simply add a **Markdown** card and wrap your code with triple backticks <code>```</code> as shown in the following example:

````md
```
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}
```
````

The plugin will automatically detect the language and apply color highlighting accordingly. The following languages are supported out of the box:

* Bash
* C
* CPP
* C#
* CSS
* Diff
* Go
* Graphql
* Ini
* Java
* Javascript
* Json
* Kotlin
* Less
* Lua
* Makefile
* Markdown
* Objective-C
* Perl
* PHP
* Plain text
* Python
* R
* Ruby
* Rust
* SCSS
* Shell
* SQL
* Swift
* Typescript
* Vbnet
* Wasm
* XML
* Yaml

If you want to use a language that is not in the list above, you can add it manually by injecting the following code in `Settings` --> `Code injection` --> `Site Footer`:

```html
<script type="module">
  // Elm language
  import elm from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/languages/elm.min.js';
  window.hljs.registerLanguage('elm', elm);
</script>
```

## Theme

By default, Glow uses the beautiful **Tokyo Night Dark** theme, which incorporates a range of colors that make the code look great. However, if you wish to use another theme, you can do the following:

1. Inject the following code to disable the current theme:

```html
<script>
  var disableDefaultHighlightTheme = true;
</script>
```

2. Inject the following code in `Settings` --> `Code injection` --> `Site Header`:

```html
<!-- GitHub Dark theme -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
```

You can find all the available themes on [this page](https://cdnjs.com/libraries/highlight.js).

## Line Numbers

By default, code blocks will display line numbers, which aids in identifying and understanding the code better. However, if for some reason you wish to disable this functionality, you can do so by injecting the following code:

```html
<script>
  var disableLineNumbers = true;
</script>
```

## Disable Code Highlighting

If, for some reason, you want to disable code highlighting or use another library, you can inject the following code to ensure the theme does not interfere with your own implementation:

```html
<script>
  var disableDefaultHighlighting = true;
</script>
```
