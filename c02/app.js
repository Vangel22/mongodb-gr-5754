const mongoose = require("mongoose");

const UserModel = require("./users");

// Iskopirajte go od mongodb atlas -> Connect -> Drivers
const URI =
  "<mongodb_host>://<username>:<password>@<mongodb_cluster>/<desired_db>?appName=Cluster0";

// Da se povrzeme do databaza, treba da go napiseme imeto na bazata kaj <desired_db>
// vnimavajte na formatot, bazata sekogas se pisuva pomegju / i ?

const connectDb = () => {
  try {
    mongoose.connect(URI);
    console.log("connected!");
  } catch (err) {
    console.log(err);
  }
};

connectDb();

const main = async () => {
  // Create
  // const newUser = new UserModel({
  //   name: "John",
  //   age: 20,
  //   email: "john@email.com",
  //   hobbies: ["Cycling", "Reading"],
  //   address: {
  //     street: "Street X",
  //     city: "Gotham",
  //   },
  // });
  // await newUser.save();
  // Read
  // const foundUser = await UserModel.findOne({ name: "John" });
  // console.log("Found user: ", foundUser);
  // Update
  // const updatedUser = await UserModel.updateOne(
  //   { _id: "69ceb7ff1b3c1a790012c25c" },
  //   { age: 21 },
  // );
  // console.log("updated user", updatedUser);
  // Delete
  // const deletedUser = await UserModel.deleteOne({
  //   _id: "69ceb7ff1b3c1a790012c25c",
  // });
  // console.log("deleted user", deletedUser);
};

main();
