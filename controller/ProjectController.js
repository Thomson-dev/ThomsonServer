import Project from "../model/ProjectModel.js";
import asyncHandler from "express-async-handler";
import cloudinary from "../cloudinary/cloudinary.js";

const createProject = asyncHandler(async (req, res) => {
    const { name,description, category, image } = req.body;
    try {
      let uploadedResponse = null;
      if (image) {
        uploadedResponse = await cloudinary.uploader.upload(image, {
          upload_preset: "userprofile",
        });
      }
      // console.log(uploadedResponse)
    
      const userProject = new Project({
        name,
        category,
        description,
        image: uploadedResponse.url
      });
    
      const createdProject = await userProject.save();
      res.status(201).json(createdProject);
    } catch (error) {
      console.error("Error creating Project:", error.message);
      res
        .status(500)
        .json({ message: "Error creating Project", error: error.message });
    }
  });
  
  const getUserProject = asyncHandler(async (req, res) => {
    const userProject = await Project.find({});
   
    res.json(userProject);
  });

  export { createProject, getUserProject };