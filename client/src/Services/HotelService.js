import axios from "axios";

const API_URL="http://localhost:5000/api/Bookings"

export const createBooking=async(Booking)=>{
  const response=await axios.post(API_URL,Booking);
  return response.data;
}
export const GetAllBooking=async()=>{
  const response=await axios.get(API_URL);
  return response.data;
}

export const GetAllBookingById=async(id)=>{
  const response=await axios.get(`${API_URL}/${id}`);
  return response.data;
}