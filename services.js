const path = require("path")
const fs = require("fs")
const hbs = require("./handlebars");
const { convertHtmlToPdfV00, convertHtmlToPdfV01, convertHtmlToPdfV02 } = require("./utils/utils-two");

async function invoice(data) {
    const filePath = path.join(__dirname + '/templates/invoice.hbs');
    const templateHtml = await fs.readFileSync(filePath, "utf-8");
    const template = hbs.compile(templateHtml);
    const html = template(data)
    return html;
}

async function getInvoicePdf(data) {
    const html = await invoice(data);
    // const pdfBuffer = await convertHtmlToPdf(html);
    // const pdfBuffer = await convertHtmlToPdfV01(html);
    const pdfBuffer = await  convertHtmlToPdfV02(html)
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