
import { useEffect, useState } from "react";
import { GetAllBooking } from "../Services/HotelService";

function DashBoard() {
  const [Bookings, setBookings] = useState([]);

  const loadBooking = async () => {
    try {
      const response = await GetAllBooking();
      setBookings(response.data);
    } catch (error) {
      console.log("Error while fetching bookings");
      console.error(error);
    }
  };

  useEffect(() => {
    loadBooking();
  }, []);

  const Roomcharge = (Booking) => {
    return Booking.days * Booking.roomRate;
  };

  const servicecharge = (Booking) => {
    const ExtraGuests =
      Booking.guests > 2 ? Booking.guests - 2 : 0;

    return ExtraGuests * Booking.days * 300;
  };

  const Subtotal = (Booking) => {
    return (
      Roomcharge(Booking) +
      Booking.foodBill +
      servicecharge(Booking)
    );
  };

  const DiscountAmount = (Booking) => {
    return Subtotal(Booking) * Booking.discount / 100;
  };

  const GST = (Booking) => {
    return (
      (Subtotal(Booking) - DiscountAmount(Booking)) * 12 / 100
    );
  };

  const FinalBill = (Booking) => {
    return (
      Subtotal(Booking) -
      DiscountAmount(Booking) +
      GST(Booking)
    );
  };

  const TotalRevenue = Bookings.reduce(
    (total, Booking) => total + FinalBill(Booking),
    0
  );

  return (
    <div className="container-fluid bg-light min-vh-100 py-4 px-3 px-md-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
        <div>
          <span className="badge bg-primary mb-2">
            HOTEL MANAGEMENT
          </span>

          <h2 className="fw-bold text-dark mb-1">
            Booking Dashboard
          </h2>

          <p className="text-secondary mb-0">
            Manage reservations and track booking bills.
          </p>
        </div>

        <button
          className="btn btn-primary shadow-sm"
          onClick={loadBooking}
        >
          Refresh Data
        </button>
      </div>

      {/* Summary Cards */}
      <div className="row g-4 mb-4">

        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 d-flex justify-content-between align-items-center">
              <div>
                <p className="text-secondary fw-semibold mb-2">
                  Total Bookings
                </p>

                <h2 className="fw-bold text-dark mb-2">
                  {Bookings.length}
                </h2>

                <small className="text-success">
                  Reservations recorded
                </small>
              </div>

              <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 fs-2">
                B
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 d-flex justify-content-between align-items-center">
              <div>
                <p className="text-secondary fw-semibold mb-2">
                  Total Bill Amount
                </p>

                <h2 className="fw-bold text-success mb-2">
                  ₹{TotalRevenue.toFixed(2)}
                </h2>

                <small className="text-secondary">
                  After discount, including GST
                </small>
              </div>

              <div className="bg-success bg-opacity-10 text-success rounded-3 p-3 fs-2">
                ₹
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Booking Table */}
      <div className="card border-0 shadow-sm">

        <div className="card-header bg-white border-0 p-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div>
            <h5 className="fw-bold mb-1">
              All Hotel Bookings
            </h5>

            <p className="text-secondary small mb-0">
              Booking details and calculated charges
            </p>
          </div>

          <span className="badge bg-primary rounded-pill px-3 py-2">
            {Bookings.length} Records
          </span>
        </div>

        <div className="table-responsive">
          <table className="table table-hover table-striped align-middle mb-0">

            <thead className="table-dark">
              <tr>
                <th>Customer</th>
                <th>Room Type</th>
                <th>Days</th>
                <th>Guests</th>
                <th>Room Rate</th>
                <th>Food Bill</th>
                <th>Discount %</th>
                <th>Room Charge</th>
                <th>Service Charge</th>
                <th>Subtotal</th>
                <th>Discount Amount</th>
                <th>GST (12%)</th>
                <th>Final Bill</th>
              </tr>
            </thead>

            <tbody>
              {Bookings.length > 0 ? (
                Bookings.map((Booking) => (
                  <tr key={Booking._id}>
                    <td className="fw-semibold text-dark">
                      {Booking.customerName}
                    </td>

                    <td>
                      <span className="badge bg-info text-dark">
                        {Booking.roomType}
                      </span>
                    </td>

                    <td>{Booking.days}</td>
                    <td>{Booking.guests}</td>

                    <td>₹{Booking.roomRate}</td>
                    <td>₹{Booking.foodBill}</td>

                    <td>{Booking.discount}%</td>

                    <td>₹{Roomcharge(Booking)}</td>

                    <td>₹{servicecharge(Booking)}</td>

                    <td className="fw-semibold">
                      ₹{Subtotal(Booking).toFixed(2)}
                    </td>

                    <td className="text-danger">
                      ₹{DiscountAmount(Booking).toFixed(2)}
                    </td>

                    <td>
                      ₹{GST(Booking).toFixed(2)}
                    </td>

                    <td className="fw-bold text-success">
                      ₹{FinalBill(Booking).toFixed(2)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="13" className="text-center py-5">
                    <h5 className="text-secondary">
                      No bookings found
                    </h5>

                    <p className="text-secondary small mb-0">
                      Add a booking to display records here.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>

            {Bookings.length > 0 && (
              <tfoot className="table-light">
                <tr>
                  <td colSpan="12" className="text-end fw-bold">
                    Total Bill Amount:
                  </td>

                  <td className="fw-bold text-success">
                    ₹{TotalRevenue.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            )}

          </table>
        </div>

        <div className="card-footer bg-white text-secondary small py-3">
          Showing {Bookings.length} booking records
        </div>

      </div>
    </div>
  );
}

export default DashBoard;
