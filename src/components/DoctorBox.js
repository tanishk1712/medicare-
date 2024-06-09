import React from 'react';
import './style/doctorbox.css'; // Ensure you have this CSS file in place

export default function DoctorBox({ name, specialty }) {
    return (
        <div className="doctor-box">
            <svg width="274" height="324" viewBox="0 0 274 324" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20C0 8.95431 8.9543 0 20 0H254C265.046 0 274 8.95431 274 20V324H0V20Z" fill="#AED3E2" />
                <mask id="mask0_0_67"  maskUnits="userSpaceOnUse" x="0" y="0" width="274" height="324">
                    <path d="M0 20C0 8.95431 8.9543 0 20 0H254C265.046 0 274 8.95431 274 20V324H0V20Z" fill="white" />
                </mask>
                <g mask="url(#mask0_0_67)">
                </g>
            </svg>

            <div className="doctor-info">
                <h3 className="doctor-name">{name}</h3>
                <p className="doctor-specialty">{specialty}</p>
            </div>
        </div>
    );
}
