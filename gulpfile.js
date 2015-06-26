var gulp = require("gulp"),  
  deploy = require("gulp-gh-pages");

gulp.task('publish', function () {  
  gulp.src("_book/\*\*/\*.\*")
    .pipe(deploy({
      remoteUrl: "git@github.com:macula-projects/macula-framework.git"
    }))
    .on("error", function(err){
      console.log(err)
    })
});