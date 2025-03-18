const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectToDb = async () => {
  const dbInstance = await mongoose.connect(process.env.MONGODB_URL);
  console.log("Connected at : " + dbInstance.connection.host);
};

module.exports = connectToDb;
