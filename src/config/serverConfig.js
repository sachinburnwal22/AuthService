// Load environment variables before anything else
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

dotenv.config(); // Must be at top

module.exports = {
  PORT: process.env.PORT || 3000, // fallback
  SALT: bcrypt.genSaltSync(10),
  JWT_KEY: process.env.JWT_SECRET,
  DB_SYNC: process.env.DB_SYNC === "true", // convert to boolean
};
