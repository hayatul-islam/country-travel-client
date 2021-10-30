import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddNewTravel = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        axios.post('http://localhost:5050/addTravel', data)
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
        console.log(data)
    };

    return (
        <div>
            <div className="py-5 container">
                <div className="row my-5">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-5 shadow px-4 py-5 rounded rounded-2">
                        <h1 className="text-center text-uppercase pb-4"><span className="text-danger">Add a new</span> Travel</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control" {...register("name", { required: true, maxLength: 20 })} placeholder="Country Name" /> <br />
                            <textarea className="form-control" {...register("description", { required: true })} placeholder="Description" /> <br />
                            <input className="form-control" {...register("img", { required: true })} placeholder="Image url" /> <br />
                            <input className="form-control" type="number" {...register("price", { required: true })} placeholder="Price" /> <br />
                            <input className="form-control bg-success text-white py-2" type="submit" value="Add new Travel" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewTravel;