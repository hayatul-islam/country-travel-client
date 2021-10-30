import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    return (
        <Container className="py-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
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
                            <td>{order.phone}</td>
                            <td>{order.address}</td>
                            <td>{order.status}</td>
                            <td className="text-center text-danger fs-5"><i class="far fa-trash-alt"></i></td>
                        </tr>
                        )
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default ManageOrders;