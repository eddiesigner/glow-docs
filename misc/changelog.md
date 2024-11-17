# Changelog

## Version 1.4.0

> Released on 18/11/2024

* Added a new custom setting to allow having pagination in the home page for the latest posts
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
