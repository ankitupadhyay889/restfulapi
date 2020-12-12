const mongoose = require("mongoose");
const validator = require("validator");

// define a schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: [true , "Email id is present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid");
      }
    },
  },
  address: String,
  phone: Number,
});

// compile our model
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;