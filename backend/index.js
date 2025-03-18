const express = require("express");
const cors = require("cors");
const connectToDb = require("./db.js");
const mainRouter = require("./routes/index.js");

const app = express();
const PORT = 8001;

connectToDb();

app.use(cors());

app.use(express.json());

app.use("/api/v1/", mainRouter);

app.listen(PORT || 5001, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
