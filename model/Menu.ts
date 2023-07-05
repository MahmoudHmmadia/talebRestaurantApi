import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  imageName: String,
  name: String,
  info: String,
  price: String,
  rateArr: { type: Array, default: [] },
  rate: { type: Number, default: 0 },
  orderTimes: Number,
  peopleComments: Array,
  cat: String,
  type: String,
  blurHash: String,
});
const Menu = mongoose.model("menu", menuSchema);
export default Menu;
