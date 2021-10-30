import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
// const axios = require('axios').default;
import axios from 'axios';

const BookNow = () => {

    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'Panding';
        axios.post('http://localhost:5050/orders', data)
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
        <div className="py-5 d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 20 })} /> <br />
                <input defaultValue={user?.email} {...register("email")} /> <br />
                <input type="number" {...register("phone")} /> <br />
                <input {...register("address")} placeholder="Your address" /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default BookNow;