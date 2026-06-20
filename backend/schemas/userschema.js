const mongoose   = require("mongoose");
const bcrypt = require("bcrypt");
const {Schema} = require("mongoose");


const userschema = mongoose.Schema({
     email : {
        type : String,
        required: true,
    },
    username : {
        type : String,
        required: true,
    },
   
    password : {
        type : String,
        required: true,
    },
});

userschema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("user" , userschema);