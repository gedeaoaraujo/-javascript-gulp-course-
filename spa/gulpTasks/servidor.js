const gulp = require('gulp')
const webServer = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(cb){
    return gulp.src('build')
        .pipe(webServer({
            ports: 8080,
            open: true,
            livereload: true
        }))
}

function monitorarArquivos(cb){
    watch('src/**/*.html', () => gulp.series('appHtml')())
    watch('src/**/*.scss', () => gulp.series('appCss')())
    watch('src/**/*.js', () => gulp.series('appJs')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appImgs')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}
