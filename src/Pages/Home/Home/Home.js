import React from 'react';
import Album from '../Album/Album';
import Banner from '../Banner/Banner';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Album></Album>
            <Services></Services>
        </div>
    );
};

export default Home;