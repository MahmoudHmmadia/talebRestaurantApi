import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
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
  total: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Object,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

const Order = mongoose.model("order", orderSchema);
export default Order;
