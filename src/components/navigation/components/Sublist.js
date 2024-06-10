import React from "react";
import { Link } from "react-router-dom";

export default function Sublist({ data,parentPath }) {
  

  return (
    <div>
      <ul className="dropdown-menu">
        {data?.map((item, index) => {
          return (
            <li key={index}>
              <Link className="dropdown-item" to={`${parentPath}/${item.sub_equip_cat_slug}`}>
                {item.sub_equip_cat_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
