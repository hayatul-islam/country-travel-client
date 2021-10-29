import React from 'react';
import Banner from '../Banner/Banner';
import GoodReasons from '../GoodReasons/GoodReasons';
import Travel from '../Travel/Travel';

const Home = () => {
    return (
        <div>
            <Banner />
            <Travel />
            <GoodReasons />
        </div>
    );
};

export default Home;