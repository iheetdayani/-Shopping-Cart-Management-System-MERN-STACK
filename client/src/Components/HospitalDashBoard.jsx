import { useState, useEffect } from "react";
import { GetAllPatients } from "../Services/HospitalService";

function HospitalDashBoard() {
  const [patients, setPatients] = useState([]);
  const loadPatients = async () => {
    try {
      const response = await GetAllPatients();
      setPatients(response.data);
    } catch (error) {
      console.log(error);
      console.log(error?.response);
      console.log(error?.response.message);
    }
  }
  useEffect(() => {
    loadPatients();
  }, []);
  const roomcharge = (patient) => {
    if (patient.roomType === "General") return patient.days * 1000;
    if (patient.roomType === "Private") return patient.days * 2500;
    if (patient.roomType === "ICU") return patient.days * 5000;
    return 0;
  }
  const TotalRevenue = patients.reduce((total, patient) => {
    return total + patient.doctorFees + patient.medicineBill;
  }, 0);
  const Subtotal = (patient) => {
    return roomcharge(patient) + patient.doctorFees + patient.medicineBill;
  };

  const discount = (patient) => {
    return Subtotal(patient) * patient.discount / 100;
  };
  const GST = (patient) => {
    return (Subtotal(patient) - discount(patient)) * 5 / 100;
  };
  const FinalBill = (patient) => {
    return Subtotal(patient) - discount(patient) + GST(patient);
  };
  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <div>
            <h2 className="fw-bold text-primary mb-1">
              Hospital Patient Dashboard
            </h2>
            <p className="text-secondary mb-0">
              Manage and view all patient records
            </p>
          </div>

          <span className="badge bg-primary fs-6 px-3 py-2">
            Total Patients: {patients.length}
          </span>
        </div>

        {/* Patient Table */}
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-header bg-white border-0 p-4">
            <h5 className="fw-bold mb-1">Patient Records</h5>
            <p className="text-secondary small mb-0">
              Patient details and billing information
            </p>
          </div>

          <div className="table-responsive">
            <table className="table table-hover table-striped align-middle mb-0">
              <thead className="table-dark">
                <tr>
                  <th className="px-4 py-3">Patient Name</th>
                  <th className="py-3">Room Type</th>
                  <th className="py-3">Days</th>
                  <th className="py-3">Doctor Fees</th>
                  <th className="py-3">Medicine Bill</th>
                  <th className="py-3">Discount</th>
                  <th className="py-3">roomcharge</th>
                  <th className="py-3">discount</th>
                  <th className="py-3">SubTotal</th>
                  <th className="py-3">GST</th>
                  <th className="py-3">FinalBill</th>
                </tr>
              </thead>

              <tbody>
                {patients.length > 0 ? (
                  patients.map((patient) => (
                    <tr key={patient._id}>
                      <td className="px-4 fw-semibold text-dark">
                        {patient.patientName}
                      </td>

                      <td>
                        <span className="badge bg-info text-dark">
                          {patient.roomType}
                        </span>
                      </td>

                      <td>{patient.days}</td>

                      <td className="fw-medium">
                        ₹{patient.doctorFees}
                      </td>

                      <td className="fw-medium">
                        ₹{patient.medicineBill}
                      </td>

                      <td>
                        <span className="badge bg-success bg-opacity-10 text-success">
                          {patient.discount}%
                        </span>
                      </td>
                      <td>
                        {roomcharge(patient)}
                      </td>
                      <td>
                        {discount(patient)}
                      </td>
                      <td>
                        {Subtotal(patient)}
                      </td>
                      <td>
                        {GST(patient)}
                      </td>
                      <td>
                        {FinalBill(patient)}
                      </td>


                    </tr>

                  ))

                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-5">
                      <h5 className="text-secondary">
                        No Patients Found
                      </h5>
                      <p className="text-secondary mb-0">
                        Patient records will appear here.
                      </p>
                    </td>
                  </tr>
                )}
                <h4 className="text-success fw-bold">
                  Total Revenue: ₹{TotalRevenue}
                </h4>

              </tbody>
            </table>
          </div>

          <div className="card-footer bg-white border-0 p-3 text-secondary small">
            Showing {patients.length} patient records
          </div>
        </div>

      </div>
    </div>
  )
}

export default HospitalDashBoard
