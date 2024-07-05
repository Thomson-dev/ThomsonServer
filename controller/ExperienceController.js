import asyncHandler from "express-async-handler";
import Experience from "../model/ExperienceModel.js";

const ExperienceController = asyncHandler(async (req, res) => {
  const { company, title, startDate, endDate, description } = req.body;

  try {
    const ExperienceDetail = new Experience({
      company,
      title,
      startDate,
      endDate,
      description,
    });

    const createdExperience = await ExperienceDetail.save();

    
    res.status(201).json(createdExperience);
  } catch (error) {
    console.error("Error creating user:", error.message);
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
});



const getExperience = asyncHandler(async (req, res) => {
  const experience = await Experience.find({});
  
  res.json(experience);
});


export { ExperienceController, getExperience };