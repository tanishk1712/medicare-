import React from 'react';
import './style/section4.css'; // Ensure you have this CSS file in place
import DoctorBox from './DoctorBox';

export default function Section4() {
    return (
        <div id='section4'>
            <div className="section4-container">
                <div className="background">
                    <svg width="326" height="328" viewBox="0 0 326 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_0_63)">
                            <circle cx="284" cy="34" r="171" stroke="white" strokeWidth="100" />
                        </g>
                        <defs>
                            <filter id="filter0_d_0_63" x="0.5" y="-239.5" width="567" height="567" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feMorphology radius="12.5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_63" />
                                <feOffset dy="10" />
                                <feGaussianBlur stdDeviation="25" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.231373 0 0 0 0 0.47451 0 0 0 0.0725798 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_63" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_63" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="section2">
                    <h1 className="section2-heading">We Have The Best Specialist</h1>
                    <p className="section2-paragraph">
                        We have a wide experience in experience design and strategy, with locally-rooted knowledge.
                    </p>
                </div>
            </div>
            <div className="doctors">
                <DoctorBox name="Dr. Awaatif Al" specialty="Dental Care" />
                <DoctorBox name="Dr. Filipa Gaspar" specialty="Cardiology" />
                <DoctorBox name="Dr. Sukhmeet Gorae" specialty="Neurological" />
                <DoctorBox name="Dr. Siri Jakobsson" specialty="Prediatrics" />
            </div>
        </div>
    );
}
