import mongoose from "mongoose";
const ProductSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  quantity:{
    type:Number,
    required:true
  },
  discount:{
    type:Number,
    required:true
  }
},{
  timestamps:true
});
const Products=mongoose.model("Products",ProductSchema);

export default Products;