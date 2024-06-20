import React from "react";
import pdf from "./../../../assets/icons/pdf.svg";
import { Link } from "react-router-dom";
export default function InspectionReports({ equipReports }) {
  return (
    <div className="d-flex p-5">
      {equipReports.length>0 ? (
        equipReports.map((report, index) => {
          return (
            <Link className="px-2" to={report.report} key={index}>
              <img src={pdf} alt={pdf} className="w-100" height="100px" />
              <span className="poppins fw-500 d-block text-center">
                Reports
              </span>
            </Link>
          );
        })
      ) : (
        <h2>No reports to Show...</h2>
      )}
    </div>
  );
}
