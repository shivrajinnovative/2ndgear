import React, { useEffect, useState } from "react";
import searchIcon from "../assets/icons/search (1).svg";
import mapPin from "../assets/icons/map-pin.svg";
import axios from "axios";
import inimg from './../assets/images/in.png'
import dot from './../assets/icons/dot.svg'
export default function Header() {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const response = await axios(
        `${process.env.REACT_APP_API_URL}/get-states-list`
      );
      setStates(response.data.statesData);
    };
    getStates();
  }, []);

  const ListItem=({children})=>{
    return (
      <div className="d-flex align-items-start">
        <img src={dot} alt={dot} className="mx-2"/><p className="">{children}</p>

      </div>
    )
  }

  return (
    <header>
      <div className="container-fluid">
        <div className="row header">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className="poppins heading col-8 mx-auto pt-5 mt-5">
              <h1 className="fw-700">Unlock Great Value with Quality</h1>
              <h5 className="fw-700">
             
                Pre-Owned Used <span className="fw-400">Surplus Asset</span>
              </h5>
              <div className="mx-auto col-3 my-4">
                <img src={inimg} alt={inimg} className="img-fluid" />
              </div>
              <div className="row list">
                <div className="col-md-6">
                  <ListItem>Aggregate & Sand Plants</ListItem>
                  <ListItem>Blocks/ Bricks Making Plants
                  </ListItem>
                  <ListItem>Dry Mix Mortar Plants & More
                  </ListItem>
                </div>
                <div className="col-md-6">
                  <ListItem>Asphalt Plant (ASP)</ListItem>
                  <ListItem>Concrete Batching Plants
                  </ListItem>
                  </div>
              </div>
              <div className="inputBox d-flex justify-content-between">
                <div className="selectOptions center">
                  <img src={mapPin} alt="map-Pin" />
                  <select>
                    {states?.map((city, index) => {
                      return (
                        <option value={city.hashed} key={index}>
                          {city.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <select name="" id="">
                  <option value="">Buy</option>
                  <option value="">Sell</option>
                </select>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
