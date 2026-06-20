const { default: mongoose } = require("mongoose");
const {Schema} = require("mongoose");
const positionschema = new Schema({
    product : String,
    name : String,
    qty : Number,
    price : Number,
    avg : Number,
    net : String,
    day : String,
    isloss : Boolean,
});

module.exports = mongoose.model("position" , positionschema);