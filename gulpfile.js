var elixir = require('laravel-elixir');

/**
 * Requires
 */
require('laravel-elixir-svg-symbols');

/**
 * A recommended assets folder structure
 *
 * /assets
 *   /font
 *   /img
 *   /js
 *   /scss
 *   /svg
 *
 * Note that each folder is singular!
 */

/**
 * Config
 */
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./.gulprc', 'utf8'));

// This is where all of your non-compiled assets live.
elixir.config.assetsPath = 'assets';
// This is where your compiled assets should be found.
elixir.config.publicPath = 'dist';

elixir.config.notifications = config.notifications;

// This is the directory within your assets folder that contains
// all of your scss files.
elixir.config.css.sass.folder = 'scss';
elixir.config.css.sass.search = '/**/*.scss';

// This is the dev url that Browsersync should proxy to localhost.
elixir.config.browserSync.proxy = config.browserSync.proxy;

/**
 * Mix!
 */
elixir(function(mix) {
    /**
     * Copy files
     */
    mix.copy(
        elixir.config.assetsPath + '/font',
        elixir.config.publicPath + '/font'
    );

    mix.copy(
        elixir.config.assetsPath + '/img',
        elixir.config.publicPath + '/img'
    );

    mix.copy(
        elixir.config.assetsPath + '/svg/single',
        elixir.config.publicPath + '/svg/single'
    );

    /**
     * JavaScript
     *
     * Compiles assets/js/main.js to dist/js/main.js
     */
    mix.webpack('main.js');

    /**
     * SCSS
     *
     * Compiles assets/scss/main.scss to dist/css/main.css.
     */
    mix.sass('main.scss');

    /**
     * SVG Symbols
     *
     * Copys all SVGs to the public path as well as creating a symbol.svg.
     */
    mix.svgSprite(
        elixir.config.assetsPath + '/svg/sprite',
        elixir.config.publicPath + '/svg'
    );

    /**
     * Browsersync
     */
    mix.browserSync({
        files: [
            elixir.config.publicPath + '/' + elixir.config.css.outputFolder + '/**/*.css',
            elixir.config.publicPath + '/' + elixir.config.js.outputFolder + '/**/*.js'
        ]
    });
});
