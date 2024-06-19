import React, { useEffect, useState } from 'react';
import { useDynamicQuery } from '../../../utils/apiUtils';
import { Slider } from 'antd';
import { useDispatch } from 'react-redux';
import { setPriceForFilter } from '../../../store/slices/equipmentSlice';

export default function PriceRange() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const { data, error, isLoading } = useDynamicQuery(['high-low'], 'get-low-high-price');
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const lowestPrice = Number(data.lowestPrice);
      const highestPrice = Number(data.highestPrice);
      setMinPrice(lowestPrice);
      setMaxPrice(highestPrice);
      setPriceRange([lowestPrice, highestPrice]);
    }
  }, [data]);

  const handleRangeChange = (values) => {
    setPriceRange(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPriceForFilter(priceRange));
  };

  const clearPriceFilter = (e) => {
    e.preventDefault();
    setPriceRange([minPrice, maxPrice]); 
    dispatch(setPriceForFilter([minPrice, maxPrice])); 
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading price range data.</div>;
  }

  return (
    <div className="price-range-container">
      <div className="price-range-label">
        <label className="py-2 mb-2">
          Price: &#8377; {priceRange[0].toLocaleString()} - &#8377; {priceRange[1].toLocaleString()}
        </label>
        <Slider
          range
          min={minPrice}
          max={maxPrice}
          defaultValue={priceRange}
          value={priceRange}
          onChange={handleRangeChange}
        />
        <button onClick={handleSubmit} className="btn bg-primary text-white mx-3">Apply</button>
        <button onClick={clearPriceFilter} className="btn bg-primary text-white mx-3">Reset</button>
      </div>
    </div>
  );
}
