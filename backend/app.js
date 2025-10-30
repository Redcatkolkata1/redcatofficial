require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
require("./db/conn");
const router = require("./routes/router");

const app = express();
const port = process.env.PORT || 6002;

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded files publicly
app.use("/uploads", express.static("uploads"));

// API routes
app.use("/api", router); // ✅ prefix all API routes

// ===============================
// ✅ Serve React frontend build
// ===============================
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ===============================

app.listen(port, () => {
  console.log(`✅ Server started on port ${port}`);
});
