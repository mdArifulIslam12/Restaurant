import React from 'react';
import './FoodTimeSection.css'

const FoodTimeSection = () => {
    return (
        <div className='mt-5 pt-5 mb-5'>
            <div className='foodTimeSection'>
            <div className="container">
                <div className="row d-flex justify-content-center my-5 text-white">
                    <div className="col-lg-5 text-lg-end">
                        <h2>Private Dining</h2>
                        <h5>We are here to make your special day a truly memorable one</h5>
                        <h5 className='mb-4'>(511) 447 - 7554</h5>
                        <h2>Events</h2>
                        <h5>Call now for booking</h5>
                        <h5 className='mb-4'>(511) 447 - 9363</h5>
                    </div>
                    
                    <div className="col-lg-1 text-center">
                        <div className='d-inline-block h-100 boder-dashed1'>

                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h2>Reservations</h2>
                        <h5>From Monday to Saturday from 09:00am 18.00hrs</h5>
                        <h5>(511) 446 - 2652</h5>
                        <h5 className='mb-4'>(511) 482 - 7585</h5>
                        <h2>Lunch</h2>
                        <h5>Monday to Saturday from 12:30am to to 4:30pm.</h5>
                        <h5 className='mb-4'>Sunday from 12:30am to 5:30pm.</h5>
                        <h2>Dinner</h2>
                        <h5>Monday to Saturday from 7:00am to 11:00pm.</h5>
                        <h5 className='mb-4'>Sunday from 6:00 am to 11:00pm.</h5>    
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FoodTimeSection;