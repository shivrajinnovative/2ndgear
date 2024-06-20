import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='py-5 my-5 text-center'>
      <h2  className='display-1 fw-700 my-5 py-5'>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className='text-uppercase btn bg-primary text-white my-5'> go to HomePage</Link>
    </div>
  );
};

export default NotFound;
