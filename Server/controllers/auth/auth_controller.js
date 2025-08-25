const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

//signup
const registeruser = async (req, res) => {
  const { username, email, password } = req.body || {};
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return res.status(409).json({ success: false, message: 'User already exists' });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const newuser = new User({ username, email, password: hashpassword });

    await newuser.save();
    res.status(200).json({
      success: true,
      message: " user Successfully Signup",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "some error Occur",
    });
  }
};

//login (placeholder)
const login = async (req, res) => {
  try {
    return res.status(501).json({ success: false, message: 'Not implemented' });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "some error Occur",
    });
  }
};

module.exports = { registeruser, login };
