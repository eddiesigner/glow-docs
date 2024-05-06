# Tags Page

On this page, you can quickly view all the tags. You can explore a live demo by clicking [this link](https://glow.eduardogomez.io/tags), and it appears as follows:

![](https://res.cloudinary.com/edev/image/upload/v1705145792/glow/CleanShot_2024-01-13_at_12.34.02_1.jpg)

## Enable Tags Page

To enable this page please follow these steps:

1. Unzip the theme file (`glow.zip`) and upload the `routes.yaml` file in the Ghost Admin by heading to `Settings` --> `Labs` --> `Beta features` --> `Routes`

2. In the Ghost Admin head to `Pages` and click on `New page`

3. Give it a title (e.g. _Tags_)

::: warning
If you decide to use another title for this page it is important that you manually change the **Page URL** in the page settings so that the value is `tags`, otherwise it will not work.
:::

4. Publish the page and you're done!

::: tip
You do not need to add content to this page as it is automatically generated.
:::

### Using a different URL

If you want to use a different URL, `/categories` for example, you can follow these steps:

1. Create a backup of the theme file (`glow.zip`)

2. Unzip the theme file

3. Open the file `routes.yaml` with a code editor

4. Replace `tags` with `categories` as is shown in the highlighted lines in the following example:

```yaml
  /tags/:  // [!code --]
  /categories/: // [!code ++]
    template: tags
    data: page.tags  // [!code --]
    data: page.categories // [!code ++]
```

::: warning
Please note that the `template` should keep the same value `tags`, otherwise it won't work.
:::

5. Save your changes

6. Head to the Ghost Admin and upload the file `routes.yaml` in `Settings` --> `Labs` --> `Beta features` --> `Routes`
