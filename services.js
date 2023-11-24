const path = require("path")
const fs = require("fs")
const hbs = require("./handlebars")

async function invoice(data) {
    const filePath = path.join(__dirname + '/templates/invoice.hbs');
    const templateHtml = await fs.readFileSync(filePath, "utf-8");
    const template = hbs.compile(templateHtml);
    const html = template(data)
    return html;
}

async function testOne(data) {
    const filePath = path.join(__dirname + '/templates/test-one.hbs');
    const templateHtml = await fs.readFileSync(filePath, "utf-8");
    const template = hbs.compile(templateHtml);
    const html = template(data)
    return html;
}

module.exports = { invoice, testOne }