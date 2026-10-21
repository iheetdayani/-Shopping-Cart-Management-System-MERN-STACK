import axios from "axios";

const API_URL="http://localhost:5000/api/Patients"

export const createPatient=async(Patient)=>{
  const response=await axios.post(API_URL,Patient);
  return response.data;
}
export const GetAllPatients=async()=>{
  const response=await axios.get(API_URL);
  return response.data;
}

export const GetAllPatientsById=async(id)=>{
  const response=await axios.get(`${API_URL}/${id}`);
  return response.data;
}