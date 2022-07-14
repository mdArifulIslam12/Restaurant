import React from 'react';
import './Foodsection.css'

const Foodsection = () => {
    return (
        <div className='foodsection mt-5 pt-5 mb-5'>
            <div className='foodsection-img'>
                <img src="https://prium.github.io/tryposh/assets/images/restaurant-big-01.jpg" alt="" className='w-100' />
            </div>
            <div className='foodsection-detail'>
                <h2 className='detail1 mb-0'>NOt The kind of </h2>
                <h2 className='detail mb-0'>Barbecue</h2>
                <h2 className='detail mb-0'>You Have</h2>
                <h2 className='detail mb-0'>At home</h2>
            </div>
        </div>
    );
};

export default Foodsection;