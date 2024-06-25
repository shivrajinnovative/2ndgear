import React, { useEffect, useState, useRef } from "react";
import signUp from "./assets/images/signUp.png";
import { useDynamicQuery } from "./../utils/apiUtils";
import { useFormSubmit } from "./../utils/useFormSubmit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setRegistrationTokens } from "../store/slices/registerSlice";

export default function RegisterModal() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [youAreOptions, setYouAreOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [name,setName]=useState("")
  const [mobile,setMobile]=useState("")
  const [email,setEmail]=useState("")
  const [address,setAddress]=useState("")
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [pincode,setPincode] = useState("");
  const [registeredAs, setRegisteredAs] = useState("");
  const [youAre, setYouAre] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // aA1@3456
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const dispatch=useDispatch()
  const formData = {
    name,
    mobile_no: mobile,
    email,
    address,
    state: selectedState,
    city: selectedCity,
    pincode,
    registeras: registeredAs,
    roledesc: youAre,
    password: newPassword,
    password_confirmation: confirmPassword
  };

  const { data: statesData, isLoading: statesLoading } = useDynamicQuery(
    ["states"],
    "get-states-list"
  );

  const buyerList = ["Looking For Myself", "Agent", "Corporate Buyer"];
  const sellerList = ["Asset Owner", "Agent", "Corporate Representative"];

  const registeredAsRef = useRef(null);

  useEffect(() => {
    if (statesData) {
      setStates(statesData.statesData);
    }
  }, [statesData]);

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    return "";
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setNewPassword(password);
    const validationError = validatePassword(password);
    setError(validationError);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    if (confirmPassword !== newPassword) {
      setConfirmError("Passwords do not match.");
    } else {
      setConfirmError("");
    }
  };

  const handleStateChange = async (e) => {
    const stateHash = e.target.value;
    setSelectedState(stateHash);

    try {
      const {
        data: citiesResponse
      } = await axios.post(
        `${process.env.REACT_APP_API_URL}/get-states-cities-list`,
        { stateid: stateHash }
      );
      if (citiesResponse && citiesResponse.citiesData) {
        setSelectedCity(""); 
        setCities(citiesResponse.citiesData);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleRegisteredAsChange = (e) => {
    const value = e.target.value;
    setRegisteredAs(value);
    setYouAre("");
    if (value === "buyer") {
      setYouAreOptions(buyerList);
    } else if (value === "seller") {
      setYouAreOptions(sellerList);
    } else {
      setYouAreOptions([]);
    }
  };
  const handleFormSubmit =async (e) => {
    e.preventDefault();
    setLoading(true); 

    const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/user-registration`, formData);
    if(data.flag==='1'){
      setLoading(false);
      dispatch(setRegistrationTokens({hashedtoken:data.hashedtoken,hashtoverify:data.htvo,bearer:data.token}))
        const modalTrigger = document.getElementById(
          "mobileVerificationModalTrigger"
        );
        if (modalTrigger) {
          modalTrigger.click();
        }   
    }
};
  return (
    <div
      className="modal fade registerform"
      id="registerModal"
      aria-hidden="true"
      aria-labelledby="registerModalLabel"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row py-5">
              <div className="d-none d-lg-flex col-lg-5 center">
                <img src={signUp} className="img-fluid px-lg-5" alt="signUp" />
              </div>
              <div className="col-lg-7 pt-lg-0 poppins">
                <h4 className="mx-3">Sign Up</h4>
                <form className="row mx-2" onSubmit={handleFormSubmit}>
                  <div className="mb-3 col-lg-6">
                    <label htmlFor="name" className="form-label">
                      Name <span>*</span>
                    </label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label htmlFor="mobileNumber" className="form-label">
                      Mobile Number <span>*</span>
                    </label>
                    <input type="tel" 
        pattern="[0-9]{10}"
        title="Please enter a 10-digit mobile number" className="form-control"  value={mobile} onChange={(e)=>setMobile(e.target.value)}  required />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input type="text" className="form-control"  value={address} onChange={(e)=>setAddress(e.target.value)}  />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label htmlFor="state" className="form-label">
                      State <span>*</span>
                    </label>
                    <select
                      name="state"
                      className="form-control"
                      value={selectedState}
                      onChange={handleStateChange}
                      required
                    >
                      <option value="" disabled>
                        - Select State -
                      </option>
                      {states?.map((state, index) => (
                        <option
                          value={state.hashed}
                          key={index}
                          onChange={handleCityChange}
                        >
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label htmlFor="city" className="form-label">
                      City <span>*</span>
                    </label>
                    <select
                      name="city"
                      className="form-control"
                      value={selectedCity}
                      onChange={handleCityChange}
                      required
                    >
                      <option value="" disabled>
                        - Select City -
                      </option>
                      {cities?.map((city, index) => (
                        <option value={city.hashed} key={index}>
                          {city.city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label htmlFor="pinCode" className="form-label">
                      Pin Code
                    </label>
                    <input type="number" className="form-control"  value={pincode} onChange={(e)=>setPincode(e.target.value)}  />
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label htmlFor="registeredAs" className="form-label">
                      Registered As <span>*</span>
                    </label>
                    <select
                      name="registeredAs"
                      id="registeredAs"
                      className="form-control"
                      value={registeredAs}
                      onChange={handleRegisteredAsChange}
                      ref={registeredAsRef}
                      required
                    >
                      <option value="" disabled>
                        - Select Option -
                      </option>
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                    </select>
                  </div>
                  <div className="mb-3 col-lg-12">
                    <label htmlFor="youAre" className="form-label">
                      You Are <span>*</span>
                    </label>
                    <select
                      name="youAre"
                      id="youAre"
                      className="form-control"
                      value={youAre}
                      onChange={(e) => setYouAre(e.target.value)}
                      disabled={!registeredAs}
                      required
                    >
                      <option value="" disabled>
                        - Select Option -
                      </option>
                      {youAreOptions.map((option, index) => (
                        <option value={option} key={index}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label htmlFor="newPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword2"
                      value={newPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                    {error && <small className="text-danger">{error}</small>}
                  </div>
                  <div className="mb-3 col-lg-6">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword2  "
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      required
                    />
                    {confirmError && (
                      <small className="text-danger">{confirmError}</small>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn text-white d-block col-5 mx-4 bg-primary"
                  >
                    {loading?"Wait...":"Submit"}
                  </button>
                  <button
                    id="mobileVerificationModalTrigger"
                    type="button"
                    className="d-none"
                    data-bs-toggle="modal"
                    data-bs-target="#mobileVerificationModal"
                  >
                    Trigger Modal
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
