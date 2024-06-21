import React, { useState } from "react";
import AgentForm from "../../services/components/AgentForm";
import formImage from "../assets/icons/agentForm.svg";
import formImageBlue from "../assets/icons/agentFormBlue.svg";
export default function FormIcon() {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <>
      {click && (
        <div className="col-8 col-lg-3 bg-white rounded-3 overflow-hidden floatingForm">
          <h4 className="bg-primary text-white px-4 d-flex justify-content-around py-3">
            Register As Agent
            <i
              className="bi bi-x"
              onClick={() => setClick(!click)}
              type="button"
            ></i>
          </h4>
          <div className="px-5">
          <AgentForm purpose="agentregistration" />

          </div>
        </div>
      )}
      <div
        className="formIcon"
        onMouseEnter={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onClick={() => setClick(!click)}
      >
        <img
          src={hover ? formImage : formImageBlue}
          alt={formImageBlue}
          onMouseEnter={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        />
      </div>
    </>
  );
}
