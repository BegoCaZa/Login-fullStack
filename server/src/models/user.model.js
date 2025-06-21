const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: String,
    userName: { type: String, required: true }
  },
  { timestamps: true, collection: 'users_collection' }
);

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
