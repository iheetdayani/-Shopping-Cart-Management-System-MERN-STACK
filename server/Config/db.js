import mongoose from "mongoose";
const ConnectDb=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected SuccessFully");
  }catch(error){
    console.log("Error while connect Database");
    console.log(error);
    console.log(error.message);
  }
}
export default ConnectDb;