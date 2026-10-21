import mongoose from "mongoose";
const HotelBookingSchema=new mongoose.Schema({
    customerName: {
    type: String,
    required: true
  },
  roomType: {
    type: String,
    required: true
  },
  days: {
    type: Number,
    required: true
  },
  guests: {
    type: Number,
    required: true
  },
  roomRate: {
    type: Number,
    required: true
  },
  foodBill: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  }
});

const HoteBooking=mongoose.model("HotelBooking",HotelBookingSchema);

export default HoteBooking;