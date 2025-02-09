# Changelog

## Version 1.5.0

> Released on 10/02/2025

* Added support for [native custom fonts](/basics/theme-settings#native-custom-fonts)
* Added Bluesky icon
* Added German translations
* Fixed an issue where the price of a subscription plan had a wrong format under certain circumstances
* Updated Docker image (development only)
* Bump version number

````
New Files:

+ locales/de.json

Modified Files: 

* assets/images/icons.svg
* members/account.hbs
* package.json
* partials/fonts/albert-sans.hbs
* partials/fonts/alegreya.hbs
* partials/fonts/archivo.hbs
* partials/fonts/be-vietnam-pro.hbs
* partials/fonts/bespoke-slab.hbs
* partials/fonts/bricolage-grotesque.hbs
* partials/fonts/dm-sans.hbs
* partials/fonts/domine.hbs
* partials/fonts/epilogue.hbs
* partials/fonts/fira-sans.hbs
* partials/fonts/fraunces.hbs
* partials/fonts/geist.hbs
* partials/fonts/general-sans.hbs
* partials/fonts/hind.hbs
* partials/fonts/hubot-sans.hbs
* partials/fonts/inter.hbs
* partials/fonts/literata.hbs
* partials/fonts/lora.hbs
* partials/fonts/mona-sans.hbs
* partials/fonts/newsreader.hbs
* partials/fonts/noto-serif.hbs
* partials/fonts/onest.hbs
* partials/fonts/piazzolla.hbs
* partials/fonts/plus-jakarta-sans.hbs
* partials/fonts/poppins.hbs
* partials/fonts/roboto-slab.hbs
* partials/fonts/roboto.hbs
* partials/fonts/rowan.hbs
* partials/fonts/rubik.hbs
* partials/fonts/satoshi.hbs
* partials/fonts/sora.hbs
* partials/fonts/source-sans.hbs
* partials/fonts/source-serif.hbs
* partials/fonts/spline-sans.hbs
* partials/fonts/urbanist.hbs
* partials/fonts/vollkorn.hbs
* partials/fonts/zodiak.hbs
* src/docker-compose.yml
* src/sass/common/_mixins.scss
````

## Version 1.4.0

> Released on 18/11/2024

* Added a new custom setting to allow having pagination in the home page for the latest posts (more details in the [theme settings](/basics/theme-settings#show-pagination))
* Redirect to Membership in Sign Up page if logged in but not paying, redirect to Home page if paying member
* Updated Docker image (development only)
* Bump version number

````
Modified files:

* home.hbs
* members/signup.hbs
* package.json
* src/docker-compose.yml
* src/sass/components/home/_featured-section.scss
* src/sass/components/posts/_posts-feed.scss
````

## Version 1.3.0

> Released on 21/10/2024

* Added "Edit account info" link in the account page
* Added Threads icon
* Improved the styles for bookmark, audio, download, nft and product cards
* Added styles for disabled buttons
* Fixed an issue where the theme didn't handle edge cases properly for the featured tags section in the home page
* Fixed an issue where embeds were not properly centered
* Fixed some styles for checkboxes and radio buttons
* Updated Docker image (development only)
* Bump version number

````
Modified files:

* assets/images/icons.svg
* locales/en.json
* locales/es.json
* members/account.hbs
* package.json
* partials/theme-selector.hbs
* src/docker-compose.yml
* src/js/home.js
* src/sass/components/general/_button.scss
* src/sass/components/general/_forms.scss
* src/sass/components/posts/_post-content.scss
````

## Version 1.2.0

> Released on 16/09/2024

* New custom setting to upload a logo for dark mode (more details in the [publication settings](/basics/publication-settings#publication-logo))
* Updated Docker image (development only)
* Bump version number

````
Modified files:

* package.json
* partials/logo.hbs
* partials/newsletter.hbs
* partials/post-paywall.hbs
* src/docker-compose.yml
* src/sass/common/_theme.scss
* src/sass/components/general/_logo.scss
* src/sass/components/newsletter/_newsletter-form.scss
* src/sass/components/posts/_post-paywall.scss
````

## Version 1.1.0

> Released on 15/07/2024

* Fixed an issue where the signup, signin and newsletter pages didn't redirect to the home page after authenticating the user
* Section titles in home page now use body font
* Success message in signup, signin and newsletter pages has a new design
* Updated Docker image (development only)

````
New files:

+ .github/workflows/deploy-theme.yml
+ src/.env.example
+ src/.gitignore
+ src/deploy/index.js

Modified files:

* members/newsletter.hbs
* members/signin.hbs
* members/signup.hbs
* package.json
* src/docker-compose.yml
* src/package-lock.json
* src/package.json
* src/sass/components/auth/_auth-form.scss
* src/sass/components/home/_featured-section.scss
````

## Version 1.0.0

* First release 🎉
