const chalk = require('chalk');

module.exports.success = function (msg, title = 'Success:') {
    console.log(chalk.bgGreen(title), msg);
}

module.exports.error = function (msg, title = 'Error:') {
    console.log(chalk.bgRed.white(title), msg);
}