"use strict";

const {
    src,
    dest
} = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require('gulp-strip-css-comments');
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const panini = require("panini");
const imagemin = require("gulp-imagemin");
const del = require("del");
const notify = require("gulp-notify");
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const browserSync = require("browser-sync").create();
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const svgSprite = require('gulp-svg-sprite');



const fs = require('fs');
const cb = () => {};

/* Paths */
const srcPath = 'src/';
const distPath = 'dist/';

const path = {
    build: {
        resources: distPath,
        html: distPath,
        js: distPath + "assets/js/",
        css: distPath + "assets/css/",
        images: distPath + "assets/images/",
        fonts: distPath + "assets/fonts/"
    },
    src: {
        resources: srcPath + 'resources/**',
        html: srcPath + "*.html",
        js: srcPath + "assets/js/*.js",
        css: srcPath + "assets/scss/*.scss",
        images: srcPath + "assets/images/**/*.{jpg,png,gif,ico,webp,webmanifest,xml,json}",
        svg: srcPath + "assets/images/svg/*.svg",
        fonts: srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
    watch: {
        resources: srcPath + 'resources/**',
        html: srcPath + "**/*.html",
        js: srcPath + "assets/js/**/*.js",
        css: srcPath + "assets/scss/**/*.scss",
        images: srcPath + "assets/images/**/*.{jpg,png,gif,ico,webp,webmanifest,xml,json}",
        svg: srcPath + "assets/images/svg/*.svg",
        fonts: srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
    clean: "./" + distPath
}



/* Tasks */



function serve() {
    browserSync.init({
        server: {
            baseDir: "./" + distPath
        }
    });
}

const resources = (cb) => {
    return src(srcPath + '/resources/**')
        .pipe(dest(distPath));

    cb();
}

function html(cb) {
    panini.refresh();
    return src(path.src.html, {
            base: srcPath
        })
        .pipe(plumber())
        .pipe(panini({
            root: srcPath,
            layouts: srcPath + 'layouts/',
            partials: srcPath + 'partials/',
            helpers: srcPath + 'helpers/',
            data: srcPath + 'data/'
        }))
        .pipe(dest(path.build.html))
        .pipe(browserSync.reload({
            stream: true
        }));

    cb();
}

const svgSprites = (cb) => {
    return src(path.src.svg)
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            },
        }))
        .pipe(dest(path.build.images));

    cb();
};

function fonts(cb) {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))
        .pipe(browserSync.reload({
            stream: true
        }));
    cb();
}

const checkWeight = (fontname) => {
    let weight = 400;

    switch (true) {
        case /Thin/.test(fontname):
            weight = 100;
            break;
        case /ExtraLight/.test(fontname):
            weight = 200;
            break;
        case /Light/.test(fontname):
            weight = 300;
            break;
        case /Regular/.test(fontname):
            weight = 400;
            break;
        case /Medium/.test(fontname):
            weight = 500;
            break;
        case /SemiBold/.test(fontname):
            weight = 600;
            break;
        case /Semi/.test(fontname):
            weight = 600;
            break;
        case /Bold/.test(fontname):
            weight = 700;
            break;
        case /ExtraBold/.test(fontname):
            weight = 800;
            break;
        case /Heavy/.test(fontname):
            weight = 700;
            break;
        case /Black/.test(fontname):
            weight = 900;
            break;
        default:
            weight = 400;
    }

    return weight;


};

let srcFonts = "./src/assets/scss/_fonts.scss";
let appFonts = "./dist/assets/fonts/";

const fontsStyle = (cb) => {
    let file_content = fs.readFileSync(srcFonts);

    fs.writeFile(srcFonts, "", cb);
    fs.readdir(appFonts, function (err, items) {
        if (items) {
            let c_fontname;
            for (var i = 0; i < items.length; i++) {
                let fontname = items[i].split(".");
                fontname = fontname[0];
                let font = fontname.split("-")[0];
                let weight = checkWeight(fontname);

                if (c_fontname != fontname) {
                    fs.appendFile(
                        srcFonts,
                        '@include font-face("' +
                        font +
                        '", "' +
                        fontname +
                        '", ' +
                        weight +
                        ");\r\n",
                        cb
                    );
                }
                c_fontname = fontname;
            }
        }
    });

    cb();

};

function css(cb) {
    return src(path.src.css, {
            base: srcPath + "assets/scss/"
        })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "SCSS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(sass({
            includePaths: './node_modules/'
        }))
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(cssbeautify())
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browserSync.reload({
            stream: true
        }));

    cb();
}

function cssWatch(cb) {
    return src(path.src.css, {
            base: srcPath + "assets/scss/"
        })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "SCSS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(sass({
            includePaths: './node_modules/'
        }))
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browserSync.reload({
            stream: true
        }));

    cb();
}

function js(cb) {
    return src(path.src.js, {
            base: srcPath + 'assets/js/'
        })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "JS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(webpackStream({
            mode: "production",
            output: {
                filename: 'app.js',
            },
            module: {
                rules: [{
                    test: /\.(js)$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env']
                    }
                }]
            },
            externals: {
                jquery: 'jQuery'
            }
        }))
        .pipe(dest(path.build.js))
        .pipe(browserSync.reload({
            stream: true
        }));

    cb();
}

function jsWatch(cb) {
    return src(path.src.js, {
            base: srcPath + 'assets/js/'
        })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "JS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(webpackStream({
            mode: "development",
            output: {
                filename: 'app.js',
            }
        }))
        .pipe(dest(path.build.js))
        .pipe(browserSync.reload({
            stream: true
        }));

    cb();
}

function images(cb) {
    return src(path.src.images)
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.mozjpeg({
                quality: 95,
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo({
                plugins: [{
                        removeViewBox: true
                    },
                    {
                        cleanupIDs: false
                    }
                ]
            })
        ]))
        .pipe(dest(path.build.images))
        .pipe(browserSync.reload({
            stream: true
        }));

    cb();
}




function clean(cb) {
    return del(path.clean);

    cb();
}

function watchFiles() {
    gulp.watch([path.watch.resources], resources);
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], cssWatch);
    gulp.watch([path.watch.js], jsWatch);
    gulp.watch([path.watch.images], images);
    gulp.watch([path.watch.fonts], fonts);
    gulp.watch([path.watch.fonts], fontsStyle);
    gulp.watch([path.watch.svg], svgSprites);
}

const build = gulp.series(clean, gulp.parallel(resources, html, fonts, images, svgSprites, css, js), fontsStyle);
const watch = gulp.parallel(build, watchFiles, serve);



/* Exports Tasks */
exports.resources = resources;
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.svgSprites = svgSprites;
exports.fonts = fonts;
exports.fontsStyle = fontsStyle;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;