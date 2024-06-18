import React from "react";
import { Link } from "react-router-dom";
import DateFilter from "./DateFilter";
import PriceRange from "./PriceRange";
import StateFilter from "./StateFilter";
import { useDispatch } from "react-redux";
import { filterByYear } from "../../../store/slices/productSlice";

const Accordion = ({ heading, children }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${heading.split(" ").join("").toLowerCase()}`}
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
          {heading}
        </button>
      </h2>
      <div
        id={`${heading.split(" ").join("").toLowerCase()}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
};

export default function SideBar() {
  const dispatch = useDispatch();

  return (
    <form className="refinedBy card p-3">
      <div className="d-flex justify-content-between align-items-center poppins fw-400">
        <p className="my-2">Refind by</p>
        <button
          type="reset"
          className=" btn  text-primary"
          onClick={() => dispatch(filterByYear(""))}
        >
          Clear all
        </button>
      </div>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <Accordion heading="Equipment Current State">
          <StateFilter />
        </Accordion>
        <Accordion heading="Equipment YOM">
          <DateFilter />
        </Accordion>
        <Accordion heading="Equipment Price">
          <PriceRange />
        </Accordion>
      </div>
    </form>
  );
}
// Equipment Current State
// Equipment YOM
// Equipment Price
