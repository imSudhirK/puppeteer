const wkhtmltopdf = require("wkhtmltopdf");
const pdf = require("html-pdf");
const puppeteer = require("puppeteer");

function convertHtmlToPdfV00(html) {
  return new Promise((resolve, reject) => {
    const stdout = wkhtmltopdf(html, { pageSize: "A4" });
    const buff = [];
    stdout.on("data", function (d) {
      buff.push(d);
    });
    stdout.on("end", function () {
      const buf = Buffer.concat(buff);
      resolve(buf);
    });
    stdout.on("error", (err) => {
      reject(err);
    });
  });
}

function convertHtmlToPdfV01(html, options = {}) {
  return new Promise((resolve, reject) => {
    pdf.create(html, options).toBuffer((err, buffer) => {
      if (err) reject(err);
      else resolve(buffer);
    });
  });
}

async function convertHtmlToPdfV02(html, styleTag, options = {}) {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--font-render-hinting=medium",
    ],
  });
  const page = await browser.newPage();
  await page.addStyleTag({
    content: styleTag || "@media print { body { background-color: white; } }",
  });
  await page.setContent(html);
  const pdfBuffer = await page.pdf({
    format: options?.format || "A4",
    printBackground: options?.printBackground || true,
    scale: options?.scale || 0.9,
    displayHeaderFooter: options?.displayHeaderFooter || true,
    headerTemplate: options?.headerTemplate || "",
    preferCSSPageSize: options?.preferCSSPageSize || true,
  });
  await browser.close();
  return pdfBuffer;
}

module.exports = {
  convertHtmlToPdfV00,
  convertHtmlToPdfV01,
  convertHtmlToPdfV02,
};
