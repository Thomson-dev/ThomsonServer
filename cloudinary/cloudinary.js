import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
// Configuration
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET, // Click 'View Credentials' below to copy your API secret
});

export default cloudinary;

