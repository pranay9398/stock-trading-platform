require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Holdings = require("./schemas/holdingschema");
const position = require("./schemas/positionschema");
const orders = require("./schemas/ordersschema");
const bodyparser = require("body-parser");
const cors = require("cors");
const user = require("./schemas/userschema");
const cookieparser = require("cookie-parser");
const {Signup: signup } = require("./controllers/signin");
const {login} = require("./controllers/login");
 


app.use(cors({
  origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());


mongoose.connect(process.env.db_url, {
  serverSelectionTimeoutMS: 10000,
  tls: true,
})
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.error('MongoDB connection error:', err.message));

 

app.post("/signin" , signup);
app.post("/login" , login);



app.get("/allholdings" , async (req,res)=>{
  let allholdings = await Holdings.find({});
  res.json(allholdings);
});


app.get("/allpositions" ,  async (req,res)=>{
  let allholdings = await position.find({});
  res.json(allholdings);
});

app.post("/neworder", async (req, res) => {
  const { name, qty, price, mode } = req.body || {};

  if (name == null || qty == null || price == null || !mode) {
    return res.status(400).json({ error: "Missing required fields: name, qty, price, mode" });
  }

  try {
    let neworder = new orders({ name, qty, price, mode });
    await neworder.save();
    res.status(201).json({ message: "Order placed successfully", order: neworder });
  } catch (err) {
    console.error("Error saving order:", err.message);
    res.status(500).json({ error: "Failed to save order" });
  }
});



app.get("/", (req, res) => {
    res.send("app is working");
});

app.listen(8000, () => {
   console.log("Server running on port 8000");
});
