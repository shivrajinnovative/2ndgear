import React from "react";

export default function PlantDetail() {
  const firstRow = [
    {
      title: "Equipment Capacity",
      value: "8000",
    },
    {
      title: "Equipment Brand",
      value: "Global Impex Asdf",
    },
    {
      title: "Equipment Model",
      value: "PQ78SKAS",
    },
    {
      title: "Equipment YOM",
      value: "2023",
    },
    {
      title: "Equipment Price",
      value: "₹ 800,000",
    },
    {
      title: "Equipment Current State",
      value: "Maharashtra",
    },
  ];

  const secondRow=[
    {
        title: "Equipment Current City        ",
        value: "Jalna",
    },
    {
        title: "Equipment Registered State        ",
        value: "Maharashtra",
    },
    {
        title: "Equipment HMR",
        value: "12",
    },
    {
        title: "Equipment Running Status",
        value: "Running",
    },
    {
        title: "Equipment Finance",
        value: "No",
    },
    {
        title: "Equipment Mixer Type",
        value: "Drum Mixer Asd",
    },
  ]

  const thirdRow=[
    {
        title: "Equipment Mixer Capacity        ",
        value: "2.5",
    },
    {
        title: "Equipment Silos Number",
        value: "10",
    },
    {
        title: "Equipment Silos Capacity",
        value: "100",
    },
    {
        title: "Equipment DG Set",
        value: "Yes",
    },
    {
        title: "Equipment Conveyors ",
        value: "Yes",
    },
    {
        title: "Equipment Control Panel",
        value: "Yes",
    },
  ]

  return (
    <div className="plantDetail poppins table-responsive">
      <table className="table">
      <thead>

        <tr className="border-bottom">
          {firstRow.map((data, index) => {
            return (
              <td key={index}>
                <p className="fw-400">{data.title}</p>
                <p className="fw-500">{data.value}</p>
              </td>
            );
          })}
        </tr>
          </thead>
          <tbody>

        <tr className="border-bottom">
          {secondRow.map((data, index) => {
            return (
              <td  key={index}>
                <p className="fw-400">{data.title}</p>
                <p className="fw-500">{data.value}</p>
              </td>
            );
          })}
        </tr>
        <tr className="border-bottom">
          {thirdRow.map((data, index) => {
            return (
              <td key={index}>
                <p className="fw-400">{data.title}</p>
                <p className="fw-500">{data.value}</p>
              </td>
            );
          })}
        </tr>
       
        <tr>
          <td>
            <p className="fw-400">Leagal Own Status</p>
            <p className="fw-500">Properietership</p>
          </td>
          <td>
            <p className="fw-400">Equipment Up For</p>
            <p className="fw-500">Rent</p>
          </td>
        </tr>
          </tbody>
      </table>
    </div>
  );
}
