import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    role: {
      type: Number,
      default: 101,
    },
    image: {
      type: String,
    },
    age: {
      type: Number,
    },
    phoneID: {
      type: Number,
    },
    address: {
      type: String,
    },
    salary: {
      type: Number,
    },
    jobTitle: {
      type: String,
    },
    social: {
      type: Array,
    },
    password: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
