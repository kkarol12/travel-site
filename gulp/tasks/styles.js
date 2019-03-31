var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer])) //przetwarza w tym miejcu przez poszczegolne moduły
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end'); //w tym przypadku gulp bedzie myslal ze tak ma sie zkonczyczyc funkcja w przypadku błedu i nie zakonczy watcha w konsoli
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
