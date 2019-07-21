// b-loader
module.exports = function (src) {
    src = src.replace(/t/g,'');
    return `module.exports = '${src}'`
}