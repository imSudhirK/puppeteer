const services = require("./services");

async function invoice(req, res) {
  try {
    const resp = await services.invoice(req.body);
    return res.status(200).send(resp);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
}

async function getInvoicePdf(req, res) {
  try {
    const resp = await services.getInvoicePdf(req.body);
    // if(Buffer.isBuffer(resp)) console.log(resp.length);
    return res.status(200).end(resp);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
}

async function testOne(req, res) {
  try {
    const resp = await services.testOne(req.body);
    return res.status(200).send(resp);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
}

module.exports = { invoice, getInvoicePdf, testOne };
