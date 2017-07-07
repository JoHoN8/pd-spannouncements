var gulp = require('gulp'),
    gutil = require('gulp-util'),
    //creds = require(), //path to credintial file
    spsave = require('gulp-spsave'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    WebpackDevServer = require("webpack-dev-server"),
    packageData = require("./package.json");


/************common webpack configs************/

/**********add external libraries here*********/
//example - webpackConfig.externals.jquery = 'jquery';
 

/*********webpack stuff*************************/
gulp.task('dev', ['webpack:dev', 'copyHTML']);
gulp.task('prod', ['webpack:prod', 'copyHTML']);
gulp.task('saveAll', ['saveScripts', 'saveStyles', 'savePages']);

gulp.task('webpack:prod', function (callback) {
    //custom production config
    let UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin();
    let prodTrigger = new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    });
    webpackConfig.output.filename = 'app.min.js';
    webpackConfig.plugins.push(prodTrigger, UglifyJsPlugin);
    
    webpack(webpackConfig, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack:build', err);
        }
        gutil.log('production pack completed');
        callback();
    });
});

gulp.task('webpack:dev', function (callback) {
    //custom dev config
    webpackConfig.output.filename = 'app.js';

    webpack(webpackConfig, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack:build', err);
        }
        gutil.log('developer pack completed');
        callback();
    });
});

gulp.task('webpackServer', function () {
    //custom dev config
   webpackConfig.output.filename = 'app.js';

   var compiler = webpack(webpackConfig, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack:build', err);
        }
        gutil.log('developer pack completed');
    });

    new WebpackDevServer(compiler, {
        contentBase: "./dist"
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080");
    });
});

/***************sp save stuff***************************/
gulp.task('saveScripts', function () {
    return gulp.src("./dist/**/*.js")
        .pipe(spsave({
            siteUrl: '', //absolute path to site
            folder: '', //library/folder
            flatten: false
        }, creds));
});

gulp.task('saveStyles', function () {
    return gulp.src("./dist/**/*.css")
        .pipe(spsave({
            siteUrl: '', //absolute path to site
            folder: '', //library/folder
            flatten: false
        }, creds));
});

gulp.task('savePages', function () {
    return gulp.src("./dist/**/*.aspx")
        .pipe(spsave({
            siteUrl: '', //absolute path to site
            folder: '', //library/folder
            flatten: false
        }, creds));
});

/*************copy files stuff********************************/
gulp.task('copyCSS', function () {
    gulp.src('./src/styleSheets/*')
        .pipe(gulp.dest('./dist/styleSheets'));
});
gulp.task('copyHTML', function () {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});

    /*
    to min
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())

    Sass compile (gulp-ruby-sass)
    Autoprefixer (gulp-autoprefixer)
    Minify CSS (gulp-cssnano)
    JSHint (gulp-jshint)
    Concatenation (gulp-concat)
    Uglify (gulp-uglify)
    Compress images (gulp-imagemin)
    LiveReload (gulp-livereload)
    Caching of images so only changed images are compressed (gulp-cache)
    Notify of changes (gulp-notify)
    Clean files for a clean build (del)
    */