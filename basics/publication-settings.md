# Publication Settings

After installing the theme you will most likely want to configure the following basic settings in your publication:

## Title & Description

Within the Ghost Admin's **General Settings**, you have the option to modify the publication name and provide a description, as illustrated in the screenshot below:

![](https://res.cloudinary.com/edev/image/upload/v1705230115/ghost/CleanShot_2024-01-14_at_12.00.58.png)

By default, the theme will use both the title and the description to display them in the first section of your publication's homepage unless you prefer to set unique texts for that section in the [theme settings](/basics/theme-settings). This is because the title and description defined here are also used in meta data and search results.

## Social Accounts

Ghost enables you to incorporate links to your Facebook and Twitter (now X) accounts. By default, it includes links from its own social accounts. 
To modify these links, simply remove the existing ones and input your own in the **Social accounts** section.

The links of these social accounts are displayed in the footer of the page.

![](https://res.cloudinary.com/edev/image/upload/v1705230406/ghost/CleanShot_2024-01-14_at_12.06.16.png)

If you prefer not to display Facebook and Twitter links, simply delete the default links and save the changes.

## Branding

In the **Design & branding** section, you can customize your publication to align with your brand. You can set everything from the accent color to the cover of your publication.

### Accent Color

This serves as the main color utilized by the theme to emphasize specific elements like buttons, indicators, links, and more. To alter the color, you can either input a hexadecimal value or visually select it by using the color picker.

![](https://res.cloudinary.com/edev/image/upload/v1705230531/ghost/CleanShot_2024-01-14_at_12.08.13.png)

### Publication Icon

The icon or favicon is a small image visible in the browser tab alongside the title. You can modify the icon in this section. If you do not provide an icon, the default Ghost icon will be displayed.

![](https://res.cloudinary.com/edev/image/upload/v1705230615/ghost/CleanShot_2024-01-14_at_12.09.44.png)

### Publication Logo

The logo is displayed at the beginning of the main navigation menu at the top of the page. If you do not provide a logo, the theme will show the title of your publication in its place as text.

![](https://res.cloudinary.com/edev/image/upload/v1705230690/ghost/CleanShot_2024-01-14_at_12.11.00.png)

In case you provide a logo, it is advisable for it to be an image in **SVG** format with a solid color (such as black), as the theme will attempt to invert the color when the dark theme is activated, ensuring the logo remains visible.

If you want to disable this behavior so that the logo remains the same color at all times, you can inject the following code in `Settings` --> `Code injection` --> `Site Header`:

```html
<style>
  [theme-mode="dark"] {
    --logo-invert: 0;
  }
</style>
```

### Publication Cover

The cover of the publication is used in the preview that is generally displayed when you share a link on social media. In this section, you can choose the image you want to appear in such cases.

![](https://res.cloudinary.com/edev/image/upload/v1705230794/ghost/CleanShot_2024-01-14_at_12.12.42.png)

If you want to set or change the image displayed in the first section of the homepage, you can do so in the [theme settings](/basics/theme-settings).
