require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: "iPhone 15",
    price: 79999,
    image: "/images/iphone15.png",
  },
  {
    name: "Samsung Galaxy S24",
    price: 69999,
    image: "/images/samsung_s24.png",
  },
  {
    name: "Sony Headphones",
    price: 9999,
    image: "/images/sony_headphones.png",
  },
  {
    name: "GTA 6",
    price: 4999,
    image: "/images/gta6.png",
  },
];

async function seedData() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Products Added");
  mongoose.connection.close();
}

seedData();