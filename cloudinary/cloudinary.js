import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
// Configuration
cloudinary.config({
  cloud_name: 'IX9m0c0tfDAkQvP7DNO5uP_VJ0c',
  api_key: '283347834735144',
  api_secret: 'X9m0c0tfDAkQvP7DNO5uP_VJ0c ', // Click 'View Credentials' below to copy your API secret
});

export default cloudinary;
