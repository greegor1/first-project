const mix = require('laravel-mix');

mix.setPublicPath('public');
mix.js('assets/js/button.js', 'public/js/main.js');
mix.sass('assets/scss/main.scss', 'public/css');
mix.copyDirectory('assets/image', 'public/image');
