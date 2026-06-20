const bcrypt = require("bcrypt");
const User = require("../schemas/userschema");
const createsecreattoken = require("../utils/secreattoken");
module.exports.login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email) {
            return res.json("user not found");
        }
        const foundUser = await User.findOne({email});
        if(!foundUser) {
            return res.json("user not found");
        }
        const auth = await bcrypt.compare(password, foundUser.password);
        if(!auth) {
            return res.json("incorrect password");
        }
        const token = createsecreattoken(foundUser._id);
        res.cookie("token" , token , {
            withCredentials: true,
       httpOnly: false
        } );
        res.json({message: "user logged in successfully", success: true});
    }
    catch(er) {
        console.log(er);
    }
}