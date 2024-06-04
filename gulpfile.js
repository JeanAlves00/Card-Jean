const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

// Função para compilar arquivos Less
function compileLess() {
    return gulp.src('src/styles/*.less')
        .pipe(concat('main.css'))
        .pipe(less())
        .pipe(gulp.dest('build/styles'));
}

// Função para compilar e transpilar arquivos JavaScript
function compileJS() {
    return gulp.src('src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build/js'));
}

// Função para observar mudanças nos arquivos
function watch() {
    gulp.watch('src/styles/*.less', compileLess);
    gulp.watch('src/js/*.js', compileJS);
}

// Exportando as tarefas
exports.default = gulp.series(compileLess, compileJS);
exports.watch = watch;
