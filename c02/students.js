const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  // vasata schema ovde
});

const StudentModel = mongoose.model("Student", studentSchema, "students");

module.exports = StudentModel;
