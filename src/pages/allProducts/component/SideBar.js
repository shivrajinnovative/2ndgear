import React, { useEffect, useState } from "react";
import { useDynamicQuery } from "../../../utils/apiUtils";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [states, setStates] = useState([]);
  const {
    data: statesData,
    error: statesError,
    isLoading: statesLoading,
  } = useDynamicQuery(["states"], "get-states-list");

  useEffect(() => {
    if (statesData) {
      setStates(statesData.statesData);
    }
  }, [statesData]);
  return (
    <div className="refinedBy card p-3">
      <div className="d-flex justify-content-between poppins fw-400">
        <p>Refind by</p>
        <Link>Clear all</Link>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="px-3 py-1 poppins fw-400"
      />

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Equipment Current State
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              {states?.map((state, index) => {
                return <div key={index}>{state.name}</div>;
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Equipment YOM
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Equipment Price
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
