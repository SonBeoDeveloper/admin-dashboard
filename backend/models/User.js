const mongoose = require("mongoose");
const UserScheme = new mongoose.Schema(
  {
    name: { type: String, require: true, min: 2, max: 100 },
    email: {
      type: String,
      require: true,
      unique: true,
      max: 50,
    },
    password: { type: String, require: true, min: 5 },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phongNumber: String,
    transaction: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserScheme);
module.exports = User;
