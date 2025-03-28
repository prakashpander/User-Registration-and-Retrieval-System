const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    DOB: {
        type: Date,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    District: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    RollNumber: {
        type: Number,
        required: true
    },
    FullAddress: {
        type: String,
        required: true
    },
    FavouriteFoods: {
        type: String,
        required: true
    },
    FavouriteColor: {
        type: String,
        required: true
    }

});
const User = mongoose.model('User', userSchema);
module.exports = User;

