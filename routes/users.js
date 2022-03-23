const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.editUsers);
router.delete('/:id', userController.deleteUser);
router.get('/:id', userController.getUserById);
router.get('/usernamesearch/:username', userController.findUserByUsername);
router.get('/namesearch/:name', userController.findUserByName);
router.get('/dobsearch/:dob', userController.findUserByDob);
router.get('/passwordsearch/:password', userController.findUserByPassword);
module.exports = router;