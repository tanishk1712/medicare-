import React, { useEffect, useState } from 'react';

import './style/section5.css';
import ReviewBox from './ReviewBox.js';
import ReviewBox2 from './ReviewBox2.js';

export default function Section5() {
 

  return (
    <div className="section5" id='section5'>
      <h1 className="section5-heading">What Our Customers Say</h1>
      <div className="reaview-container">
      <ReviewBox/>
      <ReviewBox2/>
      </div>
   
    </div>
  );
}
