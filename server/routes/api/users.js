'use strict';

const usersRouter = require('express').Router();

const UsersController = require('../../controllers/users');

usersRouter.post('/users', UsersController.createUser);

module.exports = usersRouter;