import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/reviewbox.css';

export default function ReviewBox() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1');
                setReviews(response.data.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <>
            {reviews.slice(1, 2).map((review, index) => (
                <div key={index} className="review-box">
                    <div className="svg-1">
                        <svg width="84" height="89" viewBox="0 0 84 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_0_98)">
                                <circle cx="41.6489" cy="41.6489" r="41.6489" fill="#007FF4" />
                                <path d="M57.1691 32.5862C56.8144 34.1232 56.44 35.7587 56.0459 37.4927C55.6912 39.2267 55.3562 40.9213 55.041 42.5765C54.7257 44.1923 54.4695 45.6899 54.2725 47.0692H46.1738L45.76 46.419C46.1147 45.0002 46.5679 43.5027 47.1196 41.9263C47.6714 40.3499 48.2625 38.7538 48.8931 37.138C49.563 35.5222 50.2133 34.0049 50.8438 32.5862H57.1691ZM43.691 32.5862C43.3363 34.1232 42.9619 35.7587 42.5678 37.4927C42.2131 39.2267 41.8781 40.9213 41.5629 42.5765C41.2476 44.1923 40.9914 45.6899 40.7944 47.0692H32.6957L32.2819 46.419C32.6366 45.0002 33.0898 43.5027 33.6415 41.9263C34.1933 40.3499 34.7844 38.7538 35.415 37.138C36.0849 35.5222 36.7352 34.0049 37.3657 32.5862H43.691Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_98">
                                    <rect width="84" height="89" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h2 className="review-text">{review.Reviews}</h2>
                    <h3 className="review-name">{review.Name}</h3>
                    <p className="patient-label">Patient</p>
                </div>
            ))}
        </>
    );
}
