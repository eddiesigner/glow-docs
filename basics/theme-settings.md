# Theme Settings

Glow offers a wide range of configuration settings so that you can customize your publication in many ways and get the most out of it.

## Site Wide Settings

These global settings are designed to manage and customize the overall aspects of your site experience.

### Fonts

![](https://res.cloudinary.com/edev/image/upload/v1705359017/glow/CleanShot_2024-01-15_at_23.48.58.jpg)

### Glow Colors

![](https://res.cloudinary.com/edev/image/upload/v1705358849/glow/CleanShot_2024-01-15_at_23.46.18.jpg)

### Disable Glow

![](https://res.cloudinary.com/edev/image/upload/v1705358298/glow/CleanShot_2024-01-15_at_23.36.43.jpg)

### Portal for Membership Experience

![](https://res.cloudinary.com/edev/image/upload/v1705358099/glow/CleanShot_2024-01-15_at_23.33.49.jpg)

### Footnote Text Override

![](https://res.cloudinary.com/edev/image/upload/v1705357940/glow/CleanShot_2024-01-15_at_23.31.11.jpg)

### Posts Per Page

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

```html
<script>
  var disableStickyHeader = true;
</script>
```

## Homepage Settings

These settings will help you customize the appearance of the homepage, particularly the initial section (also known as hero section).

### Hero Layout

![](https://res.cloudinary.com/edev/image/upload/v1705358628/glow/CleanShot_2024-01-15_at_23.39.20.jpg)

### Hero Title

![](https://res.cloudinary.com/edev/image/upload/v1705358628/glow/CleanShot_2024-01-15_at_23.39.20_2.jpg)

### Hero Description

![](https://res.cloudinary.com/edev/image/upload/v1705358628/glow/CleanShot_2024-01-15_at_23.39.20_3.jpg)

### Hero Image

![](https://res.cloudinary.com/edev/image/upload/v1705358628/glow/CleanShot_2024-01-15_at_23.42.33.jpg)

### Use Custom Call to Action

![](https://res.cloudinary.com/edev/image/upload/v1705359182/glow/CleanShot_2024-01-15_at_23.51.16.jpg)

## Post Settings

These settings only affect the appearance and behavior of posts and pages.

### Post Body Font

![](https://res.cloudinary.com/edev/image/upload/v1705357656/glow/CleanShot_2024-01-15_at_23.26.17.png)

### Disable Quote Sharing

```html
<script>
  var disableQuoteSharing = true;
</script>
```
