const router = require("express").Router();
const controllers = require("./controllers")

router.post("/test-one", controllers.testOne)


router.get("/health-status", (req, res) => {
    return res.sendStatus(200);
})

module.exports = router