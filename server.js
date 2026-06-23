require("dotenv").config();

const express = require("express");
const Product = require("./models/Product");
const mongoose = require("mongoose");

const app = express();

console.log("MONGO_URI =", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Error:", err));

app.get("/", (req, res) => {
  res.send("Amazon Clone Backend Running");
});

app.get("/api/products", async (req, res) => {
  console.log("Products route hit");

  const products = await Product.find();
  res.json(products);
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});