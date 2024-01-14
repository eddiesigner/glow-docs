# Theme Appearance

Glow has three appearance themes: **System theme** (default), **Light theme** and **Dark theme**. Users can set their preferred theme from the dropdown that is available in the footer of the page.

![](https://res.cloudinary.com/edev/image/upload/v1705179270/glow/CleanShot_2024-01-13_at_21.53.07.png)

## System Theme

The system theme is selected by default, it adapts automatically according to the user's operating system preferences.

## Light Theme

The Light theme is activated either when the user explicitly chooses it from the menu or when the System theme is enabled and the user's operating system is set to light theme. If the user manually selects this theme from the menu, it will persist irrespective of the operating system theme, unless the user chooses a different theme.

As a reference, below are the colors defined in the Light theme in case you want to adapt them according to your preferences:

```css
:root {
  --accent: #635BFF;
  --text-on-accent: #FFFFFF;
  --background: #FFFFFF;
  --foreground: #2F303A;
  --body-text: #404040;
  --light-text: #6B6B6B;
  --border: #F2F2F2;
  --slate: #F1F5F9;
  --shine: #FABF17;
  --success: #16A34A;
  --danger: #B91C1C;
  --gradient-background: rgba(255, 255, 255, 0);
  --translucent: rgba(255, 255, 255, 0.50);
}
```


If you want to change any of these colors, you can do so directly in the Ghost Admin by injecting your own styles in `Settings` --> `Code injection` --> `Site Header`. For example, if you want to change the background color you can inject the following code:

```html
<style>
  :root {
    --background: #F5F3EE;
    /* RGBA format of background color needed for gradients and translucent background */
    --gradient-background: rgba(245, 243, 238, 0);
    --translucent: rgba(245, 243, 238, 0.50);
  }
</style>
```

## Dark Theme

The Dark theme is activated either when the user explicitly chooses it from the menu or when the System theme is enabled and the user's operating system is set to dark theme. If the user manually selects this theme from the menu, it will persist irrespective of the operating system theme, unless the user chooses a different theme.

As a reference, below are the colors defined in the Dark theme in case you want to adapt them according to your preferences:

```css
[theme-mode="dark"] {
  --accent: #635BFF;
  --text-on-accent: #FFFFFF;
  --background: #0C1117;
  --foreground: #FFFFFF;
  --body-text: #C7CBD2;
  --light-text: #808392;
  --border: #1F2937;
  --slate: #161C22;
  --shine: #FABF17;
  --success: #16A34A;
  --danger: #B91C1C;
  --gradient-background: rgba(13, 17, 23, 0);
  --translucent: rgba(13, 17, 23, 0.50);
}
```

If you want to change any of these colors, you can do so directly in the Ghost Admin by injecting your own styles in `Settings` --> `Code injection` --> `Site Header`. For example, if you want to change the body text color you can inject the following code:

```html
<style>
  [theme-mode="dark"] {
    --body-text: #8DA5CE;
  }
</style>
```

::: info

If you want to change the **accent color**, it's better to do it in the `Design and branding` section of the Ghost Admin, as that value takes precedence over the one defined in these styles.
:::
