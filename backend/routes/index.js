const express = require("express");
const userRouter = require("./user.routes.js");
const accountRouter = require("./account.routes.js");
const commonRouter = require("./common.routes.js");

const router = express.Router();

// router.use("/", commonRouter);
router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;
