const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.mongoURI , {useNewUrlParser : true , useUnifiedTopology: true});

const medicineSchema = new mongoose.Schema({
    MedName : String,
    courseDuration : Number,
    numPills : Number,
    Timings : [Number]
})
const userSchema = new mongoose.Schema({
    nickname : String,
    age : Number,
    googleId : String,
    email : String,
    Medicine : [medicineSchema]
});

const User = mongoose.model('user' , userSchema);
module.exports = User;