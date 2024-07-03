import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import mapPin from "../assets/icons/map-pin.svg";
import axios from "axios";
import inimg from './../assets/images/in.png'
import dot from './../assets/icons/dot.svg'
import { useDynamicQuery } from "../../../utils/apiUtils";

export default function Header() {
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    state: '',
    action: '' 
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const { data, error, isLoading } = useDynamicQuery(['states'], 'get-states-list');

  useEffect(() => {
    if (data) {
      setStates(data.statesData);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formData.state && formData.action) {
      handleSubmit();
    }
  }, [formData]);

  const handleSubmit = () => {
    if (formData.state) {
      const path = formData.action === 'buy' ? '/buy' : '/rent';
      navigate(path, { state: { stateName: formData.state } });
    } else {
      alert('Please select a state before proceeding.');
    }
  };

  const ListItem = ({ children }) => {
    return (
      <div className="d-flex align-items-start">
        <img src={dot} alt={dot} className="mx-2" />
        <p className="">{children}</p>
      </div>
    );
  };

  return (
    <header>
      <div className="container-fluid">
        <div className="row header">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className="poppins heading col-10 col-sm-8 mx-auto pt-5 mt-5">
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
                  <ListItem>Blocks/ Bricks Making Plants</ListItem>
                  <ListItem>Dry Mix Mortar Plants</ListItem>
                </div>
                <div className="col-md-6">
                  <ListItem>Asphalt Plant (ASP)</ListItem>
                  <ListItem>Concrete Batching Plants</ListItem>
                  <ListItem>And More...</ListItem>
                </div>
              </div>
              <form className="inputBox d-flex justify-content-between" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div className="selectOptions center">
                  <img src={mapPin} alt="map-Pin" />
                  <select
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="" disabled>- Select State -</option>
                    {states?.map((city, index) => {
                      return (
                        <option value={city.name} key={index}>
                          {city.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <select
                  name="action" // Set name to action
                  value={formData.action} // Set value from formData
                  onChange={handleChange} // Handle change
                >
                  <option value="" disabled>Buy/Rent</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
