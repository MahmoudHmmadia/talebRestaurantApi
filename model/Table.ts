import mongoose, { Schema } from "mongoose";
const tableSchema = new mongoose.Schema({
  personsNumber: {
    type: Schema.Types.Mixed,
    default: "custom",
  },
  reserved: {
    type: Array,
    default: [
      {
        date: "",
        details: {
          time: [],
          name: "",
          email: "",
          phoneID: "",
          specialRequest: "",
        },
      },
    ],
  },
});
export const Table = mongoose.model("table", tableSchema);
