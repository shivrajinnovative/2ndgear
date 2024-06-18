import React, { useEffect, useState } from "react";
import { useDynamicQuery } from "../../../utils/apiUtils";

export default function StateFilter() {
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
    <div>
      {states?.map((state, index) => {
        return (
          <label key={index} className="mx-1 col-12">
            <input className="mx-1" type="checkbox" value={state.name} />
            {state.name}
          </label>
        );
      })}
    </div>
  );
}
