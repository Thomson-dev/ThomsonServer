import asyncHandler from "express-async-handler";
import generateToken from "../utills/generateToken.js";
import Login from "../model/LoginModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await Login.findOne({ username });
 

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid username or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const userExists = await Login.findOne({ username });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await Login.create({
    username,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
     
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { authUser, registerUser };
