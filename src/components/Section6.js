import React from 'react'
import './style/section6.css'

export default function Section6() {
    return (
        <div className="section6" id='section6'>
           
            <div className="subscribe-box">
                <h2 className="subscribe-heading">Subscribe to Our Newsletter</h2>
                <p className="subscribe-paragraph">Stay updated with our latest news and offers. Enter your email below to subscribe:</p>
                <div className="subscribe-input-container">
                    <input type="email" className="subscribe-input" placeholder="Enter your email" />
                    <button className="subscribe-button">Send Now</button>
                </div>
            </div>
        </div>
    )
}
