import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner d-flex justify-content-center align-items-center">
            <div className="text-white fw-bold text-uppercase text-center">
                <h1>TIME TO TRAVEL</h1>
                <p>Enjoy Every moments</p>
                <button className="btn btn-outline-light m-3">About us</button>
                <button className="btn btn-warning">Contact us</button>
            </div>
        </div>
    );
};

export default Banner;