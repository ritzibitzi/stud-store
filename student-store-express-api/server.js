const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const lowdb = require("lowdb");
const storeRouter = require("./routes/store")

const app = express();
app.use(morgan("tiny"));
app.use("/store", storeRouter);

const port = 3000;

app.get("/", (req, res, next) => {
    res.status(200).json({ping:"pong"});
});

app.listen(port, () => {
    console.log("Server is running on port", {port});
});
