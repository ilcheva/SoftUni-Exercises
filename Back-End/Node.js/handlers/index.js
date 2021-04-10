let homeHandler = require('./home.js');
let staticFiles = require('./static-files.js');
let catHandler = require('./cat.js')

module.exports = [homeHandler, staticFiles, catHandler];
