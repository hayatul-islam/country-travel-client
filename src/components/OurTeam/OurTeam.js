import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
    return (
        <div className="pb-5">
            <div className="container">
                <div className="text-center py-5">
                    <small className="text-danger fs-6">Teams</small>
                    <h1>OUR GUIDES</h1>
                </div>
                <div className="row team-container text-center">
                    <div className="col-md-3">
                        <div className="border pt-4 pb-2 mb-5 px-2">
                            <img className="img-fluid" src={'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=20&m=1045886560&s=612x612&w=0&h=JL8Dy_sRUXJo6PofsX7XkQpWjSTDhD8LuV071LMlb3Y='} alt="" />
                            <small className="text-danger">CUSCO GUIDE</small>
                            <h4>Rodney Gallagher</h4>
                            <p>Elite level athlete and two-sport star. Has length and frame to fill out to 195 pounds. First-team all-state. </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="border pt-4 pb-2 mb-5 px-2">
                            <img className="img-fluid" src={'https://media.istockphoto.com/photos/fit-man-standing-outdoors-in-a-city-picture-id1299360127?b=1&k=20&m=1299360127&s=170667a&w=0&h=1Rvw_UPTnj1LkB543cuCjiLM0xbIdjjin0rw6yaL8bc='} alt="" />
                            <small className="text-danger">CUSCO GUIDE</small>
                            <h4>Robert Spark</h4>
                            <p>Sparks was convicted in the 2007 stabbing deaths of his family members in his Dallas home. His lawyers sought.</p>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="border pt-4 pb-2 mb-5 px-2">
                            <img className="img-fluid" src={'https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?size=626&ext=jpg'} alt="" />
                            <small className="text-danger">CUSCO GUIDE</small>
                            <h4>Stephen Hoque</h4>
                            <p>Abeer will be reading from her memoir Olive Witch and Stephen from his new novel Zeke Yoder vs.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="border pt-4 pb-2 mb-5 px-2">
                            <img className="img-fluid" src={'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg'} alt="" />
                            <small className="text-danger">CUSCO GUIDE</small>
                            <h4>Peter Reever</h4>
                            <p>Research genealogy for Johann Peter Reever of Manor Township, Lancaster, Lancaster, Pennsylvania.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;