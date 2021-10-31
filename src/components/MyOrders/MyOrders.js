import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://infinite-fjord-91722.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const myOrders = orders.filter(order => order.email === user.email);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure, You wand to delete?');
        if (confirm) {


            fetch(`https://infinite-fjord-91722.herokuapp.com/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount) {
                        alert('Delete Successfully');

                        const remain = orders.filter(order => order._id !== id);
                        setOrders(remain)
                    }
                })
        }
    }

    return (
        <div className="manage-order poppins-font">

            <Container className="py-5">
                <h2 className="text-center pb-4 text-uppercase text-danger"> My Booking </h2>
                <Table striped bordered hover>
                    <thead>
                        <tr className="bg-primary text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Booking</th>
                            <th>Date</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) => <tr>

                                <td>{index + 1}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.bookName}</td>
                                <td>{order.date}</td>
                                <td>{order.address}</td>
                                <td className="text-center">{order.status}</td>
                                <td className="text-center text-danger fs-5"><i onClick={() => handleDelete(order._id)} class="far fa-trash-alt"></i></td>
                            </tr>
                            )
                        }

                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyOrders;