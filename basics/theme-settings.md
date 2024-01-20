# Theme Settings

Glow offers a wide range of configuration settings so that you can customize your publication in many ways and get the most out of it.

## Site Wide Settings

These global settings are designed to manage and customize the overall aspects of your site experience.

You can find all the site wide settings in `Settings` --> `Design & branding` --> `Site wide`

### Fonts

Glow includes a wide variety of fonts that you can use to customize the appearance of your publication and give it a unique look that sets it apart from the rest. The options include serif fonts, sans serif fonts, and even slab serif fonts. Below, you can see the complete list of fonts:

- Albert Sans
- Alegreya
- Archivo
- Be Vietnam Pro
- Bespoke Slab
- Bricolage Grotesque
- DM Sans
- Domine
- Epilogue
- Fira Sans
- Fraunces
- Geist
- General Sans
- Hind
- Hubot Sans
- Inter
- Literata
- Lora
- Mona Sans
- Newsreader
- Noto Serif
- Onest
- Piazzolla
- Plus Jakarta Sans
- Poppins
- Roboto
- Roboto Slab
- Rowan
- Rubik
- Satoshi
- Sora
- Source Sans
- Source Serif
- Spline Sans
- Urbanist
- Vollkorn
- Zodiak

You can choose the font you want for both the titles and the rest of the content displayed on all pages of the site. All fonts are available in both settings, regardless of whether they are serif fonts or sans serif fonts, providing an immense number of possible combinations.

By default, Glow uses the `Inter` font for titles and the `Geist` font for the rest of the content. If you want to change the font for titles, you can do so in the `Title font` setting, and if you want to change the font for the rest of the content, you can do so in the `Body font` setting, as shown in the following screenshot:

![](https://res.cloudinary.com/edev/image/upload/v1705359017/glow/CleanShot_2024-01-15_at_23.48.58.jpg)

:::info
The font files are included in the theme locally, so they will be hosted on your server without the need to load them from external services such as Google Fonts, ensuring that your site complies with the General Data Protection Regulation.
:::

### Glow Colors

To add a unique and beautiful touch to your publication, the theme displays a glow in various parts of the site (hence its name). This glow is composed of two colors, which are `#FF64C1` and `#FF9447` by default. As expected, the theme allows you to customize both colors to suit your taste and preferences.

You can change the colors individually through the `Glow color 1` and `Glow color 2` settings. Each of them allows you to enter the color value manually in hexadecimal format or visually using the available color picker.

![](https://res.cloudinary.com/edev/image/upload/v1705358849/glow/CleanShot_2024-01-15_at_23.46.18.jpg)

### Disable Glow

If you want your publication to have a simpler and more minimalist appearance, you can disable the glow that is displayed in various parts of the site. Keep in mind that by disabling this option, the colors you have defined for the glow will no longer be used.

To disable it, simply make sure to uncheck the `Enable glow` setting, as shown in the following screenshot:

![](https://res.cloudinary.com/edev/image/upload/v1705358298/glow/CleanShot_2024-01-15_at_23.36.43.jpg)

### Portal for Membership Experience

If you want to use [Portal](https://ghost.org/help/setting-up-portal/) for all Members functionalities instead of the ones provided by the theme you can enable the `Portal for membership experience` setting as shown in the following screenshot:

![](https://res.cloudinary.com/edev/image/upload/v1705358099/glow/CleanShot_2024-01-15_at_23.33.49.jpg)

By enabling this option all links and buttons for sign up, sign in, newsletter, account and other membership-related features will use the Portal interface instead of linking to the custom pages that the theme provides.

### Footnote Text Override

By default, the theme will display a footnote in the footer that includes the copyright symbol, the current year, the title of the publication, and credits to the Ghost platform, for example, "*© 2024 Glow Ghost Theme — Proudly published with Ghost*".

If you wish to replace that text with your own, you can do so in the `Footnote text override` setting, as shown in the following screenshot:

![](https://res.cloudinary.com/edev/image/upload/v1705357940/glow/CleanShot_2024-01-15_at_23.31.11.jpg)

If for some reason you wish to restore the default text, just clear the text you have entered in the corresponding field.

### Posts Per Page

By default, Glow displays up to 10 entries per page. If you wish to modify this number, please follow these steps:

1. Create a backup of the theme file (`glow.zip`)

2. Unzip the theme file

3. Open the file `package.json` with a code editor

4. Look for the next line of code and change its value as you prefer

```json
"posts_per_page": 12, // Default is 10
```

5. Save your changes

6. Zip the theme and upload it again

### Disable Sticky Header

The main navigation menu located at the top of the site automatically hides when scrolling down and reappears when scrolling up. It remains visible until you scroll in the opposite direction again.

If you want to disable this functionality, you can inject the following code in `Settings` -> `Code injection` -> `Site Footer`

```html
<script>
  var disableStickyHeader = true;
</script>
```

By disabling this option, the menu will stay in its initial position and will not be visible again until you scroll back to the top of the page.

## Homepage Settings

These settings will help you customize the appearance of the homepage, particularly the initial section (also known as hero section).

You can find all the site wide settings in `Settings` --> `Design & branding` --> `Homepage`

### Hero Layout

Glow offers two different types of layouts for the hero section. The default design or layout is the one you can see on the homepage of the [demo site](https://glow.eduardogomez.io/); this layout displays text on the left side and an optional image on the right side. On the other hand, the alternative layout positions the text right in the center of the page with an optional image as the background, which blends with the background color, as shown in the following screenshot:

![](https://res.cloudinary.com/edev/image/upload/v1705611102/glow/CleanShot_2024-01-18_at_21.50.20_1.jpg)

If you wish to use the alternative layout, you can select the `Large background` option available in the `Hero layout` setting. 

![](https://res.cloudinary.com/edev/image/upload/v1705358628/glow/CleanShot_2024-01-15_at_23.39.20.jpg)

:::info
In both cases, if you do not select an image, the theme will use a similar layout that displays centered text with a larger font.
:::

### Hero Title

By default, the theme will use the title of the publication as the title of the hero section. If you want to display a custom text instead, you can set it in the `Hero title` setting, as shown in the following screenshot:

![](https://res.cloudinary.com/edev/image/upload/v1705358628/glow/CleanShot_2024-01-15_at_23.39.20_2.jpg)

If you want to revert the change and display the publication title, you can simply clear the text field.

### Hero Description

By default, the theme will use the description of the publication as the description text of the hero section (_aka_ tagline). If you want to display a custom text instead, you can set it in the `Hero description` setting, as shown in the following screenshot:

![](https://res.cloudinary.com/edev/image/upload/v1705358628/glow/CleanShot_2024-01-15_at_23.39.20_3.jpg)

If you want to revert the change and display the publication description, you can simply clear the text field.

### Hero Image

In addition to a title and description, you can also set the image you want to appear in the hero section to further customize the homepage. To do this, simply upload the desired image in the `Hero image` setting, as shown in the following screenshot:

![](https://res.cloudinary.com/edev/image/upload/v1705358628/glow/CleanShot_2024-01-15_at_23.42.33.jpg)

:::info
The theme does not use the publication cover by default because, in case you want to maintain a more minimalist design without an image, deleting the cover would also remove it from social media previews and search results.
:::

### Use Custom Call to Action

By default, Glow displays a button in the first section of the homepage that, when pressed, will redirect users to the [registration page](https://glow.eduardogomez.io/signup) for subscribing to your publication or open the Portal interface for logging in if the `Portal for membership experience` setting is enabled. This button shows a predefined text and is visible to users who are not yet subscribers. Once they register and log in, the button becomes unavailable for such users.

![](https://res.cloudinary.com/edev/image/upload/v1705609744/glow/CleanShot_2024-01-18_at_21.27.07.jpg)

If you want to use a custom Call To Action button that is always available for any user, you can configure it in the theme options. Simply enable the `Use custom CTA` setting. Once enabled, both the custom text and URL that you set in the `Custom CTA text` and `Custom CTA url` settings will replace the button label and its associated URL.

![](https://res.cloudinary.com/edev/image/upload/v1705359182/glow/CleanShot_2024-01-15_at_23.51.16.jpg)

## Post Settings

These settings only affect the appearance and behavior of posts and pages.

You can find all the site wide settings in `Settings` --> `Design & branding` --> `Post`

### Post Body Font

To provide an excellent reading experience, Glow defaults to the `Source Serif` font for the text that is part of a post or page body. However, if you want to change the font, you can do so in the `Post body font` setting, as shown in the following screenshot:

![](https://res.cloudinary.com/edev/image/upload/v1705357656/glow/CleanShot_2024-01-15_at_23.26.17.png)

Keep in mind that this font is also used in the excerpt displayed on the post cards around the site.

![](https://res.cloudinary.com/edev/image/upload/v1705444775/glow/CleanShot_2024-01-16_at_23.38.13.jpg)

:::info
This font does not affect the text found in dynamic cards such as headers, bookmarks, toggles, callouts, product cards, etc.
:::

### Disable Quote Sharing

By default, the theme displays a couple of buttons next to quotes to share a link that leads directly to the corresponding quote, as shown in the following screenshot:

![](https://res.cloudinary.com/edev/image/upload/v1705439381/glow/CleanShot_2024-01-16_at_22.08.51.png)

If you want to disable this functionality, you can inject the following code in `Settings` -> `Code injection` -> `Site Footer`

```html
<script>
  var disableQuoteSharing = true;
</script>
```
