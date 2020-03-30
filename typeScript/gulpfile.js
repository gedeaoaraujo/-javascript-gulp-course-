const ts = require('gulp-typescript')
const {series} = gulp = require('gulp')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(){
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)