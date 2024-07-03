import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import cloudinary from "../cloudinary/cloudinary.js";

const createUserDetails = asyncHandler(async (req, res) => {
  const { name, experience, phone, email, address, remote, about, image } = req.body;



  try {
    let uploadedResponse = null;
    if (image) {
      uploadedResponse = await cloudinary.uploader.upload(image, {
        upload_preset: "userprofile",
      });
    }
    console.log(uploadedResponse)
  
    const userDetails = new User({
      name,
      experience,
      phone,
      email,
      address,
      user: req.user._id,
      remote,
      about,
      image: uploadedResponse
    });
  
    const createdUser = await userDetails.save();
    res.status(201).json(createdUser);
  } catch (error) {
    console.error("Error creating user:", error.message);
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
});

const getUserDetails = asyncHandler(async (req, res) => {
  const userDetails = await User.findOne({ _id: req.params.id });
  // console.log(req.params.id);
  res.json(userDetails);
});

const updateUserDetails = asyncHandler(async (req, res) => {
  const { name, experience, phone, email, address, remote, about, image } = req.body;
  let uploadedResponse = null; // Declare uploadedResponse with let and initialize as null
  if (image) {
    uploadedResponse = await cloudinary.uploader.upload(image, {
      upload_preset: "userprofile",
    });
  }
  const userDetails = await User.findById(req.params.id);
  if (userDetails) {
    userDetails.name = name;
    userDetails.experience = experience;
    userDetails.phone = phone;
    userDetails.email = email;
    userDetails.address = address;
    userDetails.remote = remote;
    userDetails.about = about;
    if (uploadedResponse) { // Only update image if uploadedResponse is not null
      userDetails.image = uploadedResponse.url; // Assuming uploadedResponse.url is the image URL
    }

    const updatedUser = await userDetails.save();
    console.log(updatedUser);
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" }); // Include a JSON response for consistency
  }
});

const deleteUserDetails = asyncHandler(async (req, res) => {
  const userDetails = await User.findById(req.params.id);
  if (userDetails) {
    await userDetails.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});


export { createUserDetails, getUserDetails, updateUserDetails, deleteUserDetails};

