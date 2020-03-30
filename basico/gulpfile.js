const { series, parallel } = gulp = require('gulp')

const inicio = cb => {
    console.log('Tarefa Inicio')
    return cb()
}

const depois = cb => {
    console.log('Tarefa depois')
    return cb()
}

function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    // .pipe(imagemPelaMetade())
    // .pipe(imgemEmpretoEBranco())
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    // .pipe(transformacaoC())
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim')
    return cb()
}

module.exports.default = series(
    parallel(inicio, depois),
    copiar,
    fim
)