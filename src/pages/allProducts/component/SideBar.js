import React from "react";
import DateFilter from "./DateFilter";
import PriceRange from "./PriceRange";
import StateFilter from "./StateFilter";
import { useDispatch } from "react-redux";
import { resetFilter } from "../../../store/slices/equipmentSlice";
import { useDynamicQuery } from "../../../utils/apiUtils";

const Accordion = ({ heading, children }) => {
  return (
    <div className="accordion-item text-capitalize">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed text-capitalize"
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

export default function SideBar({ category, subcategory }) {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useDynamicQuery(
    ["navbar"],
    "get-all-main-sub-categories"
  );
  return (
    <form className="refinedBy card p-3">
      <div className="filterGray">
        {!category && !subcategory && (
          <div
            className="accordion accordion-flush"
            id="accordionFlushExample2"
          >
            {data?.map((list, index) => {
              return (
                <Accordion key={index} heading={list.equip_cat_name}>
                  {list.subcategories?.map((equip, index) => {
                    return (
                      <label key={index} className="mx-1 col-12 ">
                        <input className="mx-1" type="checkbox" />
                        {equip.sub_equip_cat_name}
                      </label>
                    );
                  })}
                </Accordion>
              );
            })}
          </div>
        )}
      </div>
      <div className="d-flex justify-content-between align-items-center poppins fw-400">
        <p className="my-2">Refind by</p>
        <button
          type="reset"
          className=" btn  text-primary"
          onClick={() => dispatch(resetFilter())}
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
