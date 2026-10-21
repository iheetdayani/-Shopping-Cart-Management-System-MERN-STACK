import Hospital from "../Models/Hospital.js"
const createpatient=async(req,res)=>{
  try{
    const data=await Hospital.create(req.body);
    res.status(201).json({
      data:data,
      message:"Patient created SuccessFully"
    })
  }catch(error){
    res.status(400).json({
      error:error.message,
      message:"Error While create Patient"
    })
  }
}
const GetAllPatients=async(req,res)=>{
  try{
    const data=await Hospital.find();
    res.status(201).json({
      data:data,
      message:"Patient Fetched SuccessFully"
    })
  }catch(error){
    res.status(400).json({
      error:error.message,
      message:"Error While Fetched Patient"
    })
  }
}
const GetAllPatientsById=async(req,res)=>{
  try{
    const data=await Hospital.findById(req.params.id);
     if (!data) {
      return res.status(404).json({
        message: "Patient Not Found"
      });
    }
    res.status(201).json({
      data:data,
      message:"Patient Fetched SuccessFully By Their Id"
    })
  }catch(error){
    res.status(400).json({
      error:error.message,
      message:"Error While Fetched Patient By Their Id"
    })
  }
}
export  {createpatient,GetAllPatients,GetAllPatientsById}