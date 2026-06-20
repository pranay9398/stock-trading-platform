const { Schema, model } = require("mongoose");

const orderschema = new Schema({
  name : String,
  qty : String,
  price : Number,
  mode : String,
});

module.exports = new model("orders" , orderschema);