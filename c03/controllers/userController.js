const { create, getAll, update, remove, getOne } = require("../models/users");

const createUser = async (req, res) => {
  try {
    const newUser = await create(req.body);
    return res.status(200).send(newUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await getAll();
    return res.status(200).send(users);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await update(req.params.id, req.body);
    return res.status(200).send(updatedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await remove(req.params.id);
    return res.status(200).send(deletedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const getOneUser = async (req, res) => {
  try {
    const foundUser = await getOne(req.params.id);
    return res.status(200).send(foundUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getOneUser,
};
