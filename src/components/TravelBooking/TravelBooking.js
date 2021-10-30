import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const TravelBooking = () => {
    const { bookingId } = useParams();

    const [travels, setTravels] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/travels')
            .then(res => res.json())
            .then(data => setTravels(data))
    }, []);

    const booking = travels.find(book => book._id === bookingId);
    const bookName = booking?.name;

    const history = useHistory()
    const bookNow = () => {
        history.push(`/bookNow/${bookName}`)
    }

    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 px-2">
                        <small className="text-danger">Machu Picchu</small>
                        <h1 className="fw-bold">{booking?.name}</h1>
                        <p>{booking?.description}</p>
                        <div className="py-4">
                            <h5>TRAVEL STYLE: <span className="ps-3 text-danger">ACTIVE</span></h5>
                            <h5>SERVICE LEVEL: <span className="ps-3 text-danger">STANDARD</span></h5>
                            <h5>TRIP TYPE: <span className="ps-3 text-danger">SMALL GROUP </span></h5>
                        </div>
                        <h3>Price: ${booking?.price} <span className="fw-bold fs-6">4 DAYS</span></h3>
                        <button onClick={bookNow} className="btn btn-outline-dark mt-3 px-3">Book Now</button>
                    </div>
                    <div className="col-md-6 px-2">
                        <img className="img-fluid" src={booking?.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelBooking;