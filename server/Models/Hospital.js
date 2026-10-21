import mongoose from "mongoose";
const HospitalSchema=new mongoose.Schema({
   patientName: {
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
  doctorFees: {
    type: Number,
    required: true
  },
  medicineBill: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  }
});
const Hospital=mongoose.model("Hospital",HospitalSchema);

export default Hospital;