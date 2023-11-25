const hbs = require("handlebars");
const moment = require("moment");
const {
  calculate,
  checkif,
  addCommas,
  convertNumberToIndianWords,
} = require("./utils/utils-one");

hbs.registerHelper("checkif", function (...args) {
  return checkif(...args);
});

hbs.registerHelper("addComma", function (val) {
  return addCommas(val);
});

hbs.registerHelper("calculate", function (...args) {
  return calculate(...args);
});

hbs.registerHelper("convertNumberToIndianWords", function (val) {
  return convertNumberToIndianWords(val);
});

hbs.registerHelper("formatDate", function (value, format) {
  return moment(value).format(format);
});

module.exports = hbs;
