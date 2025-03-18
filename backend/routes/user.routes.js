const express = require("express");
const {
  validateUser,
  updateBody,
  validateSignInUser,
} = require("../validation/index.js");
const { User } = require("../models/User.models.js");
const { Account } = require("../models/Accounts.models.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const authmiddleware = require("../middlewares/middleware.js");

dotenv.config();

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { success } = validateUser.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});

router.get("/signin", async (req, res) => {
  const { username, password } = req.body;
  const { success } = validateSignInUser.safeParse(req.body);
  if (!success) {
    return res.status(411).json({ message: "Invalid Input" });
  }

  const dbUser = await User.findOne({
    username: username,
    password: password,
  });

  if (!dbUser) {
    return req.status(411).json({ message: "Error while logging In" });
  }

  const token = jwt.sign({ userId: dbUser._id }, process.env.JWT_SECRET);

  res.status(200).json({
    token: token,
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

router.put("/", authmiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    message: "Updated successfully",
  });
});

module.exports = router;
