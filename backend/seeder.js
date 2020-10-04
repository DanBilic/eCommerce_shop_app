import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import conncectDB from "./config/db.js";

dotenv.config();

conncectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    // get admin
    const adminUser = createdUsers[0]._id;

    // set admin to all products as user ref
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    // insert all products
    await Product.insertMany(sampleProducts);

    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// process.argv[2] -> dritter parameter der consolen eingabe-> node backedn/seeder -d
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
