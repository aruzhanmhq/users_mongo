const mongoose = require("mongoose");
const schemas = require("./Schemas");

const User = new mongoose.model("User", schemas.UserSchema);

module.exports = {
    User
}