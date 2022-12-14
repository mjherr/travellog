import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'Name is required.'],
    },
    userName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    date: {
        type: Date,
        default: Date.now
    },
  });

module.exports = mongoose.model("User", UserSchema)