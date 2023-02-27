import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: false,
  }
);

const User = mongoose.model("user", userModel);

export default User;
