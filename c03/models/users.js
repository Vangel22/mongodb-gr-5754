const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: {
      type: Number,
      default: 20,
      min: 1,
      max: 100,
      validate: {
        validator: (value) => value % 2 === 0, // ako godinite na korisnikot se paren broj validacijata ke pomine
        message: (props) => `${props.value} is not an even number!`,
      },
    },
    email: {
      //h.vangel22@gmail.com -> nikoj drug nemoze da go ima ovoj mejl, sto znaci unique e pravilno upotreben za atomicnost na podatokot
      type: String,
      unique: true,
      minLength: 10,
      lowercase: true,
    },
    bestFriend: {
      // Marko (69cec4550a749a71e10bbaa1) ima najdobar prijatel, a toa e Elena (69cec4550a749a71e10bbaa2)
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    // bestFriend: [{ // Poveke najdobri prijateli
    //   // Marko (69cec4550a749a71e10bbaa1) ima najdobar prijatel, a toa e Elena (69cec4550a749a71e10bbaa2)
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: "User",
    // }],
    // cars: [{
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: "Car",
    // }],
    // bankAccount: { // IBAN, SWIFT, TRANSACTION_ID
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "BankAccount"
    // },
    hobbies: [String],
    address: {
      street: String,
      city: String,
    },
    // createdAt: {
    //   immutable: true, // nemoze da se promeni
    //   type: Date,
    //   default: () => Date.now(),
    // },
    // updatedAt: {
    //   type: Date,
    //   default: () => Date.now(),
    // },
  },
  { timestamps: true }, // createdAt, updatedAt polinjata se dodadeni avtomatski
);

const User = mongoose.model("User", userSchema, "users");

// Create
const create = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};
// Read
const getAll = async () => {
  return await User.find();
};
// Update
const update = async (id, userData) => {
  return await User.updateOne({ _id: id }, userData);
  // return await User.updateOne({ _id }, { $set: { ...userData } });
};
// Delete
const remove = async (id) => {
  return await User.deleteOne({ _id: id });
};

// Get single user
const getOne = async (id) => {
  return await User.findOne({ _id: id }).populate({
    path: "bestFriend",
    select: "-_id name email",
  });
};

// const obj = {
//     name: "John",
//     surname: "Doe"
// }

// delete obj.name; // delete keyword

module.exports = {
  create,
  getAll,
  update,
  remove,
  getOne,
};
