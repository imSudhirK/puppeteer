const hbs = require("handlebars")
const { calculate, checkif, addCommas, convertNumberToIndianWords } = require("./utils/utils-one")

hbs.registerHelper('checkif', function (...args) {
    return checkif(...args)
})

hbs.registerHelper('addComma', function (val) {
    return addCommas(val);
})

hbs.registerHelper('calculate', function (...args) {
    return calculate(...args);
})

hbs.registerHelper('convertNumberToIndianWords', function (val) {
    return convertNumberToIndianWords(val);
})

module.exports = hbs;