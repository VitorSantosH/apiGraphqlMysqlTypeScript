const gulp = require('gulp');
const clean = require('gulp-clean');
const gulpTS = require('gulp-typescript');


const tsProject = gulpTS.createProject('tsconfig.json');


gulp.task('builderTS', () => {

    const tsResult = tsProject.src()
        .pipe(tsProject())

    return tsResult.js
        .pipe(gulp.dest('build'))
})

gulp.task('static', () => {

    return gulp.src(['src/**/*.json'])
        .pipe(gulp.dest('build'))
})

gulp.task('clean', () => {

    return gulp.src('build')
        .pipe(clean());
})

gulp.task('watch', () => {
    gulp.watch(['src/**/*.ts', 'src/**/*.json'], gulp.series('clean', 'builderTS', 'static'));
});

gulp.task('default', gulp.series('watch'));