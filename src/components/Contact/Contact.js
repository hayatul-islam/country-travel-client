import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="poppins-font">
            <div className="container mt-5 py-5">
                <div className="row mt-3">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <legend className="fs-6 mt-4">Name</legend>
                                <input className="form-control rounded-pill" type="text" placeholder="Your Name" />
                            </div>
                            <div className="col-md-6">
                                <legend className="fs-6 mt-4">Email</legend>
                                <input className="form-control rounded-pill" type="email" placeholder="Your Email" />
                            </div>
                            <div className="col-md-6">
                                <legend className="fs-6 mt-4">Phone</legend>
                                <input className="form-control rounded-pill" type="Phone" placeholder="Your Phone" />
                            </div>
                            <div className="col-md-6">
                                <legend className="fs-6 mt-4">Subject</legend>
                                <input className="form-control rounded-pill" type="text" placeholder="Subject" />
                            </div>
                            <div>
                                <legend className="fs-6 mt-4">Messages</legend>
                                <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Your messages"></textarea>
                            </div>
                            <div>
                                <button className="message-btn">Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* contacts  */}
                        <div className="mt-3 p-3">
                            <h3 className="mb-5 mt-4 fw-normal">Contact Information</h3>
                            <div>
                                <small>Brooklyn, NY 10036, United States</small>
                            </div>
                            <div className="my-3">

                                <small>1-800-123-1234</small>
                            </div>
                            <div>

                                <small>hayatulemon340@gmail.com</small>
                            </div>
                        </div>

                        {/* social media */}
                        <div className="mt-5">
                            <h3 className="fw-normal mb-0">Social Media</h3>
                            <div className="d-flex">
                                <div className="pe-4">
                                    <button className="message-btn"><i class="fab fa-facebook-f"></i> Facebook</button>
                                </div>
                                <div>
                                    <button className="message-btn"><i class="fab fa-twitter"></i> Twitter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;