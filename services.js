const path = require("path")
const fs = require("fs")
const hbs = require("./handlebars");
const { convertHtmlToPdf } = require("./utils/utils-two");

async function invoice(data) {
    const filePath = path.join(__dirname + '/templates/invoice.hbs');
    const templateHtml = await fs.readFileSync(filePath, "utf-8");
    const template = hbs.compile(templateHtml);
    const html = template(data)
    return html;
}

async function getInvoicePdf(data) {
    const html = await invoice(data);
    // const content = decodeURI(encodeURI(html));
    const pdfBuffer = await convertHtmlToPdf(html);
    return pdfBuffer;
}

async function testOne(data) {
    const filePath = path.join(__dirname + '/templates/test-one.hbs');
    const templateHtml = await fs.readFileSync(filePath, "utf-8");
    const template = hbs.compile(templateHtml);
    const html = template(data)
    return html;
}

module.exports = { invoice, getInvoicePdf, testOne }