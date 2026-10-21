import { useState, useEffect } from "react";
import { GetAllProducts } from "../Services/ShoppingcartService";


function ShoppingDashBoard() {
  const [products, setProduct] = useState([]);
  const loadProducts = async () => {
    try {
      const response = await GetAllProducts();
      setProduct(response.data);
    } catch (error) {
      console.log(error.message);
      console.log("Error while create Product");
    }
  }
  useEffect(() => {
    loadProducts();
  }, []);
  const totalprice = (product) => {
    return product.price * product.quantity
  }
  const DiscountAmount = (product) => {
    return totalprice(product) * product.discount / 100;
  }
  const FinalBill = (product) => {
    return totalprice(product) - DiscountAmount(product);
  }
  const totalcartamount = products.reduce((total, product) => {

    return total + product.price * product.quantity;
  }, 0);
  const totaldiscount = products.reduce((total, product) => {

    return total + DiscountAmount(product);
  }, 0);
  const finalpayable = () => {
    return totalcartamount - totaldiscount;
  };
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">

        {/* Header */}
        <div className="card border-0 shadow mb-4">
          <div className="card-body bg-success text-white rounded p-4">
            <h2 className="fw-bold mb-2">
              Shopping Cart Management System
            </h2>
            <p className="mb-0">
              Manage products and view product details
            </p>
          </div>
        </div>

        {/* Product Table */}
        <div className="card border-0 shadow">
          <div className="card-header bg-white py-3">
            <h5 className="mb-0 fw-bold text-success">
              Product Inventory
            </h5>
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered text-center align-middle mb-0">
                <thead className="table-success">
                  <tr>
                    <th>Sr. No.</th>
                    <th>Product Name</th>
                    <th>Price (₹)</th>
                    <th>Quantity</th>
                    <th>Discount (%)</th>
                    <th>Total Price</th>
                    <th>Discount Amount</th>
                    <th>Final Price</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product, index) => (
                    <tr key={product._id}>
                      <td>{index + 1}</td>
                      <td className="fw-semibold">{product.name}</td>
                      <td>₹{product.price}</td>
                      <td>
                        <span className="badge bg-secondary">
                          {product.quantity}
                        </span>
                      </td>
                      <td>
                        <span className="badge bg-warning text-dark">
                          {product.discount}%
                        </span>
                      </td>
                      <td>{totalprice(product)}</td>
                      <td>{DiscountAmount(product)}</td>
                      <td>{FinalBill(product)}</td>
                    </tr>
                  ))}

                  {products.length === 0 && (
                    <tr>
                      <td colSpan="8" className="py-4 text-muted">
                        No products available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Summary Section - calculations are yours */}
        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h6 className="text-muted">Total Cart Amount</h6>
                <h4 className="fw-bold text-primary">₹{totalcartamount}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h6 className="text-muted">Total Discount</h6>
                <h4 className="fw-bold text-danger">₹ {totaldiscount}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h6 className="text-muted">Final Payable Amount</h6>
                <h4 className="fw-bold text-success">₹{finalpayable()}</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}
export default ShoppingDashBoard
