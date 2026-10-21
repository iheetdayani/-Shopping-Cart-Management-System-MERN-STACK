import axios from "axios";

const API_URL="http://localhost:5000/api/Products"

export const createProducts=async(product)=>{
  const response=await axios.post(API_URL,product);
  return response.data;
}
export const GetAllProducts=async()=>{
  const response=await axios.get(API_URL);
  return response.data;
}

export const GetAllProductsById=async(id)=>{
  const response=await axios.get(`${API_URL}/${id}`);
  return response.data;
}