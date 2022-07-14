import React from 'react';
import FoodDetailSection from '../FoodDetailSection/FoodDetailSection';
import Foodsection from '../Foodsection/Foodsection';
import FoodTimeSection from '../FoodTimeSection/FoodTimeSection';
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
        </div>
    );
};

export default Home;