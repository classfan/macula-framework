var gulp = require("gulp"),  
  deploy = require("gulp-gh-pages");

gulp.task('publish', function () {  
  gulp.src("_book/**/*")
    .pipe(deploy({force:true}))
    .on("error", function(err){
      console.log(err)
    })
}); 