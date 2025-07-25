const express = require('express');
const usersController = require('../controllers/users.controller');
const usersRoutes = express.Router();

usersRoutes.get('/', usersController.getAllUsers);
usersRoutes.get('/:email', usersController.getUserByEmail);
usersRoutes.patch('/:email', usersController.updateName);
usersRoutes.post('/', usersController.createUser);
usersRoutes.patch('/:id', usersController.updateUser);
usersRoutes.delete('/:id', usersController.deleteUserById);

module.exports = usersRoutes;
