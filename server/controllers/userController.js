import User from "../model/user.js";

export const getUser = async (req, res) => {
  try {
    const listUser = await User.find();
    res.status(200).json(listUser);
  } catch (err) {
    res.status(500).json(err);
  }
}