import React from 'react';
import Banner from '../Banner/Banner';
import GoodReasons from '../GoodReasons/GoodReasons';
import OurTeam from '../OurTeam/OurTeam';
import Travel from '../Travel/Travel';

const Home = () => {
    return (
        <div>
            <Banner />
            <Travel />
            <GoodReasons />
            <OurTeam />
        </div>
    );
};

export default Home;