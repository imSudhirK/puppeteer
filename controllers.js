const services = require("./services")

async function invoice(req, res) {
    try {
        const resp = await services.invoice(req.body);
        return res.status(200).send(resp)
    } catch (err) {
        return res.status(500).send({ error: err });
    }
}

async function testOne(req, res) {
    try {
        const resp = await services.testOne(req.body);
        return res.status(200).send(resp)
    } catch (err) {
        return res.status(500).send({ error: err });
    }
}

module.exports = { invoice, testOne }