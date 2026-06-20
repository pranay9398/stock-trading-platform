const User = require("../schemas/userschema");
const createSecretToken = require("../utils/secreattoken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res) => {
  try {
    console.log("[Signup] Content-Type:", req.headers["content-type"]);
    console.log("[Signup] req.body:", req.body);

    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "email, username and password are required", success: false });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists", success: false });
    }

    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    return res.status(201).json({ message: "User signed in successfully", success: true, user });
  } catch (error) {
    console.error("[Signup] Error:", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};