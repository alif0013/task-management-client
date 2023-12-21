import React from 'react';
import Banner from './Banner/Banner';
import OurPeople from './OurPeople/OurPeople';
import Projects from '../../Components/Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurPeople></OurPeople>
            <Projects></Projects>
        </div>
    );
};

export default Home;