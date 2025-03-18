const z = require("zod");

const validateUser = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  username: z.string().email(),
  password: z.string(),
});

const validateSignInUser = z.object({
  username: z.string().email(),
  password: z.string(),
});

const updateBody = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z.string().optional(),
});

module.exports = { validateUser, updateBody, validateSignInUser };
