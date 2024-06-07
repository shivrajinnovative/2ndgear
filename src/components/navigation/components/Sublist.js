import React from "react";

export default function Sublist({ filter }) {
  let plants = [
    { title: "Concrete Batching Plant" },
    { title: "Aggregate and Sand Plant" },
    { title: "Asphalt Plant" },
    { title: "DMM Plant" },
    { title: "Classification Plant" },
    { title: "Block Making Plant" },
    { title: "Washing Plant" },
    { title: "Wet Mix Plant" },
    { title: "Jaw" },
    { title: "Cone" },
    { title: "VSI" },
    { title: "Screen" },
  ];

  let fleets = [
    { title: "LMV" },
    { title: "Trucks" },
    { title: "Dumpers" },
    { title: "Loaders" },
    { title: "Excavators" },
    { title: "Cranes" },
    { title: "Paver" },
    { title: "Transit Mixers" },
  ];

  let Miscellaneous = [
    { title: "DG Sets" },
    { title: "Weighbridge" },
    { title: "Dust Conditioners" },
    { title: "Lab Equipments" },
  ];
  
  let data;
  if (filter === "plants") {
    data = plants;
  } else if (filter === "fleets") {
    data = fleets;
  } else {
    data = Miscellaneous;
  }

  return (
    <div>
      <ul className="dropdown-menu">
        {data.map((item, index) => {
          return (
            <li key={index}>
              <a className="dropdown-item" href="#about11">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
