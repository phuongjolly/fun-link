const express = require("express");
const mongoose = require("mongoose");
const linkRouter = require("./routers/LinkRouter");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", linkRouter);

async function main() {
  await mongoose.connect("mongodb://localhost:27017/funlinks");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main().then();
