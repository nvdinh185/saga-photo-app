import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: false,
  }
);

const User = mongoose.model("user", userModel);

export default User;
