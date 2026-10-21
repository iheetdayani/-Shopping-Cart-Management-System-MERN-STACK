import express from "express";
import cors from "cors";
import ConnectDb from "./Config/db.js";
import dotenv from "dotenv";
import BookingRoutes from "./Routes/HoteBookingRoutes.js";
import ProductRoutes from "./Routes/ShoppingRoutes.js";
dotenv.config();
ConnectDb();
const app=express();
app.use(express.json());
app.use(cors());
app.use("/api/Bookings",BookingRoutes);
app.use("/api/Products",ProductRoutes);
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`);
})