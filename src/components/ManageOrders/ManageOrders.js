
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure, You wand to delete?');
        if (confirm) {


            fetch(`http://localhost:5050/delete/${id}`, {
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

    const handleStatusUpdate = id => {
        const url = `http://localhost:5050/update/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify()
        })
    }

    return (
        <Container className="py-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Booking</th>
                        <th>Phone</th>
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
                            <td>{order.phone}</td>
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
    );
};

export default ManageOrders;