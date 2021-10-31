import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './BookNow.css';
import axios from 'axios';
import { useParams } from 'react-router';

const BookNow = () => {

    const { user } = useAuth();
    const { bookName } = useParams();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'Panding';
        axios.post('https://infinite-fjord-91722.herokuapp.com/orders', data)
            .then(result => {
                if (result.data.insertedId) {
                    alert('Welcome, your order Successfully!')
                    reset();
                }
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className="book-now py-5 poppins-font">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-5">
                        <div className="book-form bg-white shadow px-4 py-5 my-5 rounded">
                            <h1 className="text-center text-uppercase pb-4"><span className="text-danger">Magical</span> Travel</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control" defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 20 })} /> <br />
                                <input className="form-control" defaultValue={user?.email} {...register("email", { required: true })} /> <br />
                                <input className="form-control" defaultValue={bookName} {...register("bookName", { required: true })} /> <br />
                                <input defaultValue={new Date().toDateString()} className="form-control"   {...register("date")} /> <br />
                                <input className="form-control" type="number" {...register("phone")} placeholder="Your Phone" /> <br />
                                <input className="form-control" {...register("address")} placeholder="Your address" /> <br />
                                <input className="form-control bg-success text-white py-2" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BookNow;