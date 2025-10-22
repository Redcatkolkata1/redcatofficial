require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db/conn");
const router = require("./routes/router");

const app = express();
const port = process.env.PORT || 6002;

app.use(cors());
app.use(express.json());

// Serve uploaded files publicly
app.use("/uploads", express.static("uploads"));

// API routes
app.use(router);

app.listen(port, () => {
    console.log(`Server Start`);
});
