const express = require("express");
const models = require("../Models");
const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
    const users = await models.User.find({});
    res.status(200).send(users);
});

usersRouter.get('/:id', async (req, res) => {
    let id = req.params.id;
    let user = await models.User.findById(id);
    res.status(200).send(user);
});

usersRouter.put('/', async (req, res) => {
    let {id, newLogin, newPassword, newFullName, newAddress} = req.body;

    let user = await models.User.findById(id);

    user.login = newLogin;
    user.password = newPassword;
    user.fullName = newFullName;
    user.address = newAddress;

    await models.User.findByIdAndUpdate(id, user);
    res.status(201).send("User updated");
});

usersRouter.post('/', async (req, res) => {
    const {login, password, fullName, address} = req.body;

    let newUser = new models.User({login, password, fullName, address});

    await newUser.save();

    res.status(201).send('User created');
});

usersRouter.delete('/:id', async (req, res) => {
    let id = req.params.id;

    await models.User.deleteOne({_id: id})
    
    res.status(200).send("User deleted");
});

module.exports = usersRouter