import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "",
    },
    phoneID: {
      type: String,
    },
    address: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
