import mongoose from "mongoose";
const feedBackSchema = new mongoose.Schema(
  {
    name: String,
    comment: String,
    rate: Number,
  },
  {
    timestamps: true,
  }
);
const FeedBack = mongoose.model("feedBack", feedBackSchema);
export default FeedBack;
