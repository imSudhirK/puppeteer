require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json({ limit: "100mb" }));
app.use("/puppeteer", routes);

app.listen(process.env.PORT, () => {
  console.log(`Puppetter service started at port: ${process.env.PORT}`);
});
