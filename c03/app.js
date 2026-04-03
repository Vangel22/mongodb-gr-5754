const express = require("express");

// const connect = require("./db/config");
// connect();

require("./db/config")();

const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getOneUser,
} = require("./controllers/userController");

const app = express();

app.use(express.json()); // req.body da moze da bide vo JSON format

app.post("/users", createUser);
app.get("/users", getAllUsers);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);
app.get("/users/:id", getOneUser);

app.listen(3000, () => console.log("Server listening at port 3000!"));
