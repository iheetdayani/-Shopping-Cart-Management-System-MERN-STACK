import Products from "../Models/Shoppingcart.js";
const createProducts=async(req,res)=>{
  try{
    const data=await Products.create(req.body);
    res.status(201).json({
      data:data,
      message:"Products created SuccessFully"
    })
  }catch(error){
    res.status(400).json({
      message:"Error while create Products"
    })
  }
}
const GetAllPrducts=async(req,res)=>{
  try{
    const data=await Products.find();
    res.status(200).json({
      data:data,
      message:"Products Fetched SuccessFully"
    })
  }catch(error){
    res.status(400).json({
      message:"Error while Fetching Products"
    })
  }
}
const GetAllProductsById = async (req, res) => {
  try {
    console.log("Booking ID:", req.params.id);

    const data = await Products.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        data: null,
        message: "Product Not Found"
      });
    }

    return res.status(200).json({
      data: data,
      message: "Products Fetched Successfully By ID"
    });

  } catch (error) {
    console.log("Error:", error.message);

    return res.status(400).json({
      message: "Error while Fetching Products By ID",
      error: error.message
    });
  }
};
export {createProducts,GetAllPrducts,GetAllProductsById}