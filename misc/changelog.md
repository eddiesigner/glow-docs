# Changelog

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
