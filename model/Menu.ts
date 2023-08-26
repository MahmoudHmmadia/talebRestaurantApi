import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  imageName: String,
  name: String,
  info: String,
  price: String,
  rateArr: { type: Array, default: [] },
  rate: { type: Number, default: 0 },
  orderTimes: {
    type: Number,
    default: 0,
  },
  peopleComments: {
    type: Array,
    default: [],
  },
  cat: String,
  type: {
    type: String,
    default: "",
  },
  blurHash: String,
});
const Menu = mongoose.model("menu", menuSchema);
export default Menu;
