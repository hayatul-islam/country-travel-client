
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import './ManageOrder.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://infinite-fjord-91722.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure, You wand to delete?');
        if (confirm) {


            fetch(`https://infinite-fjord-91722.herokuapp.com/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert('Delete Successfully');

                        const remain = orders.filter(order => order._id !== id);
                        setOrders(remain)
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        const url = `https://infinite-fjord-91722.herokuapp.com/update/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    window.location.reload();
                }
            })

    }

    return (
        <div className="manage-order">
            <Container className="py-5">
                <h2 className="text-center pb-4 text-uppercase"><span className="text-danger">Booking</span> Details</h2>
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
                            orders.map((order, index) => <tr>

                                <td>{index + 1}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.bookName}</td>
                                <td>{order.date}</td>
                                <td>{order.address}</td>
                                {
                                    order.status === 'Panding' ?
                                        <td className="text-center">
                                            <span onClick={() => handleStatusUpdate(order._id)} className="bg-warning px-2 py-1 rounded">{order.status}</span>
                                        </td> :
                                        <td className="text-center">
                                            <span onClick={() => handleStatusUpdate(order._id)} className="bg-primary px-2 text-white py-1 rounded">{order.status}</span>
                                        </td>
                                }
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

export default ManageOrders;