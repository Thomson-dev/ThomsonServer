// Importing necessary modules
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  
  },
  description: {
    type: String,
    required: false,
    
  },
  category: {
    type: String,
    required: true,
    
  },
image: { 
    type: String, 
    required: fasle
}
});

const Project = mongoose.model('Project', projectSchema);

export default Project;