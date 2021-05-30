import * as React from 'react';
import HomeAdoptions from '../components/home/HomeAdoptions';
import HomeNews from '../components/home/HomeNews';
import HomePartners from '../components/home/HomePartners';
import HomeHelp from '../components/home/HomeHelp';

const Home = () => {
    return (
        <>
            <HomeAdoptions />
            <HomeNews />
            <HomePartners />
            <HomeHelp />
        </>
    );
};

export default Home;
