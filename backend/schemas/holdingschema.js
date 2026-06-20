const {Schema} = require("mongoose");
const mongoose = require("mongoose");
const holdingschema = new Schema({
  name  : {
    type :String,
    
  },
   qty : {
    type : Number,
   },
   avg : {
    type : Number,
   },
   price : Number,
   net : String,
   day : String,
});

module.exports = mongoose.model("holding" , holdingschema);