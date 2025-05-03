import React from 'react';
import Banner from '../Components/Banner';
import OurServices from '../Components/OurServices';
import Testimonials from '../Components/Testimonials';
import ContactForm from '../Components/ContactForm';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurServices></OurServices>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;