import { createBooking,GetAllBooking,GetAllBookingById } from "../Controller/HotelBookingController.js";
import express from "express";
const router=express.Router();

router.get("/",GetAllBooking);

router.post("/",createBooking);

router.get("/:id",GetAllBookingById);

export default router;