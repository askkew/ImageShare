const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3,
  },
  description: {
    type: String,
    trim: true,
    required: true,
    minLength: 10,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    trim: true,
    unique: true,
  }
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;