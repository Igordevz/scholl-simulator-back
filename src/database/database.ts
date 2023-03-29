import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
export async function ConectMongosse() {
  try {
    mongoose.connect(
      `mongodb+srv://${process.env.ACESS_DB_NAME}:${process.env.ACESS_DB_PASS}@cluster0.eimcxdx.mongodb.net/?retryWrites=true&w=majority`
    );
  } catch (error) {
    console.log(error);
  }
}
