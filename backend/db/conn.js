const mongoose = require("mongoose");

const DB = process.env.DATABASE;

console.log("DB from env:", DB ? "Loaded ✅" : "❌ Not Loaded");

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log("DATABASE CONNECTED"))
.catch((err) => {
    console.error("MongoDB connection error:", err);
});
