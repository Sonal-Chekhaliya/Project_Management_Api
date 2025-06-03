import mongoose from "mongoose";
import dotenv from 'dotenv';
import { createAdmin } from "../seedData/createAdmin.js";

dotenv.config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const clusterName = process.env.MONGO_CLUSTER_NAME;
const dbName = process.env.MONGO_DB_NAME;

const connection_string = `mongodb+srv://${username}:${encodeURIComponent(password)}@${clusterName}.fwvxail.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=ProjectManagement`;

export const connectDB = async () => {
  try {
    await mongoose.connect(connection_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    });
    await createAdmin();
    console.log('Connection successful');
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error.message);
    throw error;
  }
};
