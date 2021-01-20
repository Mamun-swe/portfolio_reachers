const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
<<<<<<< HEAD
 | for your Laravel applications. By default, we are compiling the CSS
=======
 | for your Laravel application. By default, we are compiling the Sass
>>>>>>> 7788bc14526b0925307cc46283fbcf34716a1112
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
<<<<<<< HEAD
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
=======
    .sass('resources/sass/app.scss', 'public/css');
>>>>>>> 7788bc14526b0925307cc46283fbcf34716a1112
