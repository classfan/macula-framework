var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('publish', function () {  
  return gulp.src("macula-docs/_book/**/*")
    .pipe(ghPages())
    .on("error", function(err){
      console.log(err)
    })
});
