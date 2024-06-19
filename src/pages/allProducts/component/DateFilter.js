import React, { useEffect, useState } from "react";
import { useDynamicQuery } from "../../../utils/apiUtils";
import { useDispatch } from "react-redux";
import { setYearForFilter } from "../../../store/slices/equipmentSlice";

export default function DateFilter() {
  const [years, setYears] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useDynamicQuery(
    ["yom"],
    "get-old-new-yom"
  );

  useEffect(() => {
    if (data) {
      const oldestYear = data.oldest;
      const newestYear = data.newest;
      const yearsArray = [];
      for (let year = oldestYear; year <= newestYear; year++) {
        yearsArray.push(year);
      }
      setYears(yearsArray);
    }
  }, [data]);

  const handelClick = (event) => {
    const year = parseInt(event.target.value);
    if (event.target.checked) {
      setSelectedYears([...selectedYears, year]);
    } else {
      setSelectedYears(selectedYears.filter((y) => y !== year));
    }
};
useEffect(() => {
    dispatch(setYearForFilter(selectedYears));
  }, [selectedYears, dispatch]);

   
  return (
    <div>
      {years.map((year) => (
        <label key={year} className="col-6 my-1" onClick={handelClick}>
          <input className="mx-2" type="checkbox" value={year} />
          {year}
        </label>
      ))}
    </div>
  );
}
