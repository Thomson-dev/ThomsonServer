// Importing necessary modules
import mongoose from "mongoose"; // Import mongoose for interacting with MongoDB
import bcrypt from "bcryptjs"; // Import bcryptjs for hashing passwords

// Defining the user schema using mongoose.Schema
const loginSchema = mongoose.Schema(
  {
    // Define username field with type String, required and unique
    username: {
      type: String,
      required: true,
      unique: true,
    },
    // Define password field with type String, required
    password: {
      type: String,
      required: true,
    },
    // Define isAdmin field with type Boolean, default to false
    // isAdmin: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
  },
  {
    // Adding timestamps for createdAt and updatedAt
    timestamps: true,
  }
);

loginSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}


// Adding a pre-save hook to userSchema to hash passwords before saving
loginSchema.pre("save", async function (next) {
  // If password is not modified, move to the next middleware
  if (!this.isModified("password")) {
    next();
  }

  // Generate a salt with 10 rounds using bcrypt.genSalt
  const salt = await bcrypt.genSalt(10);
  // Hash the password with the generated salt using bcrypt.hash
  this.password = await bcrypt.hash(this.password, salt);
});

// Creating a User model using the userSchema
const Login = mongoose.model("Login", loginSchema);

// Exporting the User model to be used in other parts of the application
export default Login;
