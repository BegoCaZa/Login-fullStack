const UserModel = require('../models/user.model');

const usersController = {};

usersController.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send('Error gerring users', error);
  }
};

usersController.getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const userFound = await UserModel.findOne({ email: email });

    if (!userFound) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send(userFound);
  } catch (error) {
    res.status(500).send({ message: 'Error getting user' + error });
  }
};

usersController.createUser = async (req, res) => {
  console.log('Datos recibidos:', req.body);
  const newUser = new UserModel({ ...req.body });
  try {
    await newUser.save();
    const allUsers = await UserModel.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send({ message: 'Error getting users' + error });
  }
};

usersController.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.updateOne({ _id: id }, { $set: { ...req.body } });
    //importante que reciba objetos
    const allUsers = await UserModel.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send({ message: 'Error updating users' + error });
  }
};

usersController.updateName = async (req, res) => {
  const { email } = req.params;
  try {
    await UserModel.updateOne({ email: email }, { $set: { ...req.body } });
    const allUsers = await UserModel.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send({ message: 'Error updating name' + error });
  }
};

usersController.deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.deleteOne({ _id: id });
    //importante que reciba objetos
    const allUsers = await UserModel.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send({ message: 'Error deleting users' + error });
  }
};

module.exports = usersController;
