// Importing necessary modules
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  
  },
  description: {
    type: String,
    required: true,
    
  },
  category: {
    type: String,
    required: true,
    
  },
image: { 
    type: String, 
    required: true
}
});

const Project = mongoose.model('Project', projectSchema);

export default Project;