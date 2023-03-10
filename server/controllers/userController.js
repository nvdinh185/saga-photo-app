import User from "../model/user.js";

export const getUser = async (req, res) => {
  try {
    const listUser = await User.find();
    res.status(200).json(listUser);
  } catch (err) {
    res.status(500).json(err);
  }
}

export const createUser = async (req, res) => {
  try {
    const { id, name, img } = req.body;
    const newUser = await User.create({
      id,
      name,
      img,
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(error);
  }
};