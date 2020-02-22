const mongoose = require( 'mongoose' );

const userSchema = new mongoose.Schema({
    email    : { type:String, unique: true, required: true },
    password : { type:String, required: true },
    isAdmin  : { type:Boolean, default: false }
});

const User = new mongoose.model( "users", userSchema );

module.exports = User;