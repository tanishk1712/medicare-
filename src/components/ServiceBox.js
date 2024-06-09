import React from 'react';
import './style/servicebox.css'; // Make sure to create this CSS file for custom styles

export default function ServiceBox({ svg, serviceName }) {
  return (
    <div className="service-box">
      
        {svg}   
        <h2 className="service-name">{serviceName}</h2>
   
        
    </div>
  );
}
