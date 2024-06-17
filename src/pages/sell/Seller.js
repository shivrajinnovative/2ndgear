import React from "react";
import registerFree from './assets/registerFree.svg'
import annualfee from './assets/annualfee.svg'
import freeListing from './assets/freeListing.svg'
import paySell from './assets/paySell.svg'
import object from './assets/OBJECTS.png'
import './Seller.css'
export default function Seller() {
  return (
    <div className="pt-5 mt-5 poppins seller">
      <div className="container py-5 text-center">
        <h1 className="text-primary">4 Simple Steps for Seller Account Registration</h1>
        <h2 className="pt-5">Registration Benefits</h2>
        <div className="registrationBenefit col-md-6 bg-primary py-3 mx-auto my-5 text-white row center">
            <div className="px-md-5 col-md-6">
                <p className="py-2"><img src={registerFree} className="px-2" alt={registerFree} /> Register for Free</p>
                <p className="py-2"><img src={annualfee} className="px-2" alt={annualfee} /> No Annual Fee</p>
            </div>
            <div className="px-md-5 col-md-6">
                <p className="py-2"><img src={freeListing} className="px-2" alt={freeListing} /> Free Listing</p>
                <p className="py-2"><img src={paySell} className="px-2" alt={paySell} />Pay After Sell</p>
            </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container py-5">
            <div className="d-flex flex-wrap px-md-5 mx-sm-5 justify-content-around align-items-center">
            <div className="bg-white p-3 rounded-circle overflow-hidden">
                <img src={object} alt={object} className="img-fluid" />
            </div>
            <h2 className="text-primary my-5 my-lg-0 fw-700">Click here to Register</h2>
            <button className="btn bg-primary text-white px-4"  data-bs-target="#registerModal"
                        data-bs-toggle="modal" >Seller Register</button>
            {/* pdek qrlh nygj douy */}
            {/* pdekqrlhnygjdouy */}
            {/* $data = [
            "name" => $name,
            "email" => $email,
            "mobile" => $mobile,
            "msg" => $msg,
        ]; */}
{/* 
laravel 8 = email.php     
        laravel =9 ok */}
            </div>
            </div>
      </div>
    </div>
  );
}
