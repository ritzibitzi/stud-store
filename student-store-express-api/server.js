const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const lowdb = require("lowdb");
const storeRouter = require("./routes/store")

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/store", storeRouter);

const port = 3001;

app.listen(port, () => {
    console.log("Server is running on port", {port});
});
