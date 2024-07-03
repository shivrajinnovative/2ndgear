import React, { useEffect, useState } from "react";
import { useDynamicQuery } from "../../../utils/apiUtils";
import { setStateForFilter } from "../../../store/slices/equipmentSlice";
import { useDispatch } from "react-redux";

export default function StateFilter({defaultState}) {
  const [states, setStates] = useState([]);
  const [selectedStates, setSelectedStates] = useState(defaultState?[defaultState]:[]);
  const dispatch=useDispatch()
  const {
    data: statesData,
    error: statesError,
    isLoading: statesLoading,
  } = useDynamicQuery(["states"], "get-states-list");

  const handelClick = (e) => {
    const state = e.target.value;
    if (e.target.checked) {
      setSelectedStates([...selectedStates, state]);
    } else {
      setSelectedStates(selectedStates.filter((states) => states !== state));
    }
  };
  useEffect(() => {
    if (statesData) {
      setStates(statesData.statesData);
    }
  }, [statesData]);

  useEffect(() => {
    dispatch(setStateForFilter(selectedStates));
  }, [selectedStates, dispatch]);

  return (
    <div>
      {states?.map((state, index) => {
        return (
          <label key={index} className="mx-1 col-12">
            <input
              className="mx-1"
              type="checkbox"
              onChange={handelClick}
              value={state.name}
              checked={selectedStates.includes(state.name)}
              
            />
            {state.name}
          </label>
        );
      })}
    </div>
  );
}
