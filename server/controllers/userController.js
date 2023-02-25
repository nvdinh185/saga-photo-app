import User from "../model/user.js";

export const createUser = async (req, res) => {
  try {
    const { name, age } = req.body;
    const newUser = await User.create({
      name,
      age,
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const listUser = await User.find();
    res.status(200).json(listUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id
    console.log(id);
    const deleteUser = await User.findByIdAndDelete(id)
    res.send(deleteUser)
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id
    const name = req.body
    console.log(name, "name");
    const updateUser = await User.findByIdAndUpdate(id, name)
    res.send(updateUser)
  } catch (error) {
    res.send({ "error": error.message })
  }
}

export const searchUser = async (req, res) => {
  try {
    const data = req.query.name
    console.log(data, 'name');
    const searchUser = await User.find({ "name": { $regex: data, $options: 'i' } },)
    res.send(searchUser)
  } catch (error) {
    res.send({ "error": error.message })
  }
}