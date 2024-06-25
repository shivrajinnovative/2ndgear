import React from "react";
import { Link } from "react-router-dom";

export default function Sublist({ data,parentPath ,handelCloseNav}) {
  

  return (
      <ul className="dropdown-menu innerSubdiv" 
          aria-labelledby="okk" >
        {data?.map((item, index) => {
          return (
            <li key={index}>
              <Link className="dropdown-item" onClick={handelCloseNav}  to={`${parentPath}/${item.sub_equip_cat_slug}`}>
                {item.sub_equip_cat_name}
              </Link>
            </li>
          );
        })}
      </ul>
   
  );
}
