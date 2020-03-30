const { series, parallel } = gulp = require('gulp')
const { appCss, appHtml, appImg, appJs } = require('./gulpTasks/app')
const { depsCss, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHtml, appCss, appJs, appImg),
        series(depsCss, depsFonts)
    ),
    servidor,
    monitorarArquivos
)
