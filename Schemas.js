const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login: String,
    password: String,
    fullName: String,
    address: String
});

module.exports = {
    UserSchema
}