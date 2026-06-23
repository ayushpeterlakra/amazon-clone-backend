require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    title: "iPhone 15",
    price: 79999,
    image: "https://via.placeholder.com/200"
  },
  {
    title: "Samsung Galaxy S24",
    price: 69999,
    image: "https://via.placeholder.com/200"
  },
  {
    title: "Sony Headphones",
    price: 9999,
    image: "https://via.placeholder.com/200"
  }
];

async function seedData() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Products Added");
  mongoose.connection.close();
}

seedData();