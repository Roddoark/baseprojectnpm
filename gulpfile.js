var gulp = require('gulp');

gulp.task('nom-de-la-tache', function() {
// Le nom-de-la-tache sera toujours être utilisé lorsque
// vous voulez lancer une tâche. Par exemple, vous pourrez
// lancer cette tâche dans la console en écrivant :
// $ gulp nom-de-la-tache
});

gulp.task('hello', function() {
  console.log('Hello Zell');
});

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss
  // in app/scss and children directories
    .pipe(sass())    // ici on utilise gulp-sass
    .pipe(gulp.dest(('app/css')))
    .pipe(browserSync.reload({
  stream: true
}))
});


var browserSync = require('browser-sync');
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})

// gulp.task('watch', ['array', 'of', 'tasks', 'to', 'complete','before', 'watch'], function (){
//  ...
// })
gulp.task('watch', ['browserSync', 'sass'], function(){
  // gulp.watch('fichiers-a-suivre, ['tache1', 'tache2']')
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  // autres observations, donc mettre d'autres gulp.watch si on veut voir
  // des processus exécutés pour plusieurs types de fichiers
})

var useref = require('gulp-useref');

gulp.task('useref', function(){
  var assets = useref.assets();

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});

// Les autres requires...
var uglify = require('gulp-uglify');

gulp.task('useref', function(){
  var assets = useref.assets();

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(uglify()) // pour minifier les fichiers Javascript
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});

// Les autres requires...
var gulpIf = require('gulp-if');

gulp.task('useref', function(){
  var assets = useref.assets();

  return gulp.src('app/*.html')
    .pipe(assets)
    // Minifie seulement les fichiers Javascript
    .pipe(gulpIf('*.js', uglify()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});

var cleanCSS = require('gulp-clean-css');

gulp.task('useref', function(){
  var assets = useref.assets();

  return gulp.src('app/*.html')
    .pipe(assets)
    // Minifie seulement les fichiers CSS
    .pipe(gulpIf('*.css', cleanCSS()))
    // Minifie seulement les fichiers Javascript
    .pipe(gulpIf('*.js', uglify()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});

var imagemin = require('gulp-imagemin');

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(imagemin({
      interlaced: true
    }))
  .pipe(gulp.dest('dist/images'))
});

var cache = require('gulp-cache');

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Met en cache les images passées par imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});

var del = require('del');

gulp.task('clean:dist', function(callback){
  del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback)
});

gulp.task('clean', function(callback) {
  del('dist');
  return cache.clearAll(callback);
})
