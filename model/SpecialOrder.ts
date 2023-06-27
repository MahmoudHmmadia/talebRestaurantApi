import mongoose from "mongoose";

const specialOrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneID: {
      type: String,
      required: true,
    },
    pay: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    specialFood: {
      type: Object,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const SpecialOrder = mongoose.model("specialOrder", specialOrderSchema);
export default SpecialOrder;
