import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import FoodDetailSection from '../FoodDetailSection/FoodDetailSection';
import Foodsection from '../Foodsection/Foodsection';
import FoodTimeSection from '../FoodTimeSection/FoodTimeSection';
import Footer from '../Footer/Footer';
import Hader from '../Hader/Hader';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hader></Hader>
            <Foodsection></Foodsection>
            <FoodDetailSection></FoodDetailSection>
            <FoodTimeSection></FoodTimeSection>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;