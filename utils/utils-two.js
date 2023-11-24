const wkhtmltopdf = require("wkhtmltopdf")

function convertHtmlToPdf(html) {
    return new Promise((resolve, reject) => {
        const stdout = wkhtmltopdf(html, { pageSize: 'A4' });
        const buff = [];
        stdout.on('data', function (d) { buff.push(d) });
        stdout.on('end', function () { const buf = Buffer.concat(buff); resolve(buf) });
        stdout.on('error', (err) => { reject(err) });
    });
}

module.exports = { convertHtmlToPdf }