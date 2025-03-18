const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authmiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "Invalid token",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.userId) {
      req.userId = decoded.userId;
      next();
    } else {
      return res.status(403).json({ error: "Invalid token payload" });
    }
  } catch (error) {
    return res
      .status(403)
      .json({ error: `An error has occurred: ${error.message}` });
  }
};

module.exports = authmiddleware;
