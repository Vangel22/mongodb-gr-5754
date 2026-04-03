const mongoose = require("mongoose");

const URI = "";
async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB connected!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connect;
