const wkhtmltopdf = require("wkhtmltopdf")
const pdf = require("html-pdf")

function convertHtmlToPdfV00(html) {
    return new Promise((resolve, reject) => {
        const stdout = wkhtmltopdf(html, { pageSize: 'A4' });
        const buff = [];
        stdout.on('data', function (d) { buff.push(d) });
        stdout.on('end', function () { const buf = Buffer.concat(buff); resolve(buf) });
        stdout.on('error', (err) => { reject(err) });
    });
}

async function convertHtmlToPdfV01(html, options = {}) {
    return new Promise((resolve, reject) => {
        pdf.create(html, options).toBuffer((err, buffer) => {
            if (err) reject(err);
            else resolve(buffer);
        });
    });
}

module.exports = { convertHtmlToPdfV00, convertHtmlToPdfV01 }