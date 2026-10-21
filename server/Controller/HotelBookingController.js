import HoteBooking from "../Models/Hotel.js";
const createBooking=async(req,res)=>{
  try{
    const data=await HoteBooking.create(req.body);
    res.status(201).json({
      data:data,
      message:"Booking created SuccessFully"
    })
  }catch(error){
    res.status(400).json({
      message:"Error while create Booking"
    })
  }
}
const GetAllBooking=async(req,res)=>{
  try{
    const data=await HoteBooking.find();
    res.status(200).json({
      data:data,
      message:"Booking Fetched SuccessFully"
    })
  }catch(error){
    res.status(400).json({
      message:"Error while Fetching Booking"
    })
  }
}
const GetAllBookingById = async (req, res) => {
  try {
    console.log("Booking ID:", req.params.id);

    const data = await HoteBooking.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        data: null,
        message: "Booking Not Found"
      });
    }

    return res.status(200).json({
      data: data,
      message: "Booking Fetched Successfully By ID"
    });

  } catch (error) {
    console.log("Error:", error.message);

    return res.status(400).json({
      message: "Error while Fetching Booking By ID",
      error: error.message
    });
  }
};
export {createBooking,GetAllBooking,GetAllBookingById}