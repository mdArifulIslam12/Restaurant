import React from 'react';
import './FoodDetailSection.css'

const FoodDetailSection = () => {
    return (
        <div className='container foodDetailSection mt-5 pt-5 mb-5'>
            <div className="row ">
                <div className="col-lg-6 pe-lg-5 ps-lg-2 foodDetailSection1">
                    <h2 className='mb-3 foodDetailSection-header'>Combos & BBQ ribs</h2>
                    <div className="row py-2 d-flex align-items-center border-dashed-top border-dashed-bottom">
                        <div className="col-lg-9">
                            <h3 className='mb-0'>The smoke haus threesome</h3>
                            <p className='mb-1'>Pulled pork,slow cooked brisket and pastrami</p>
                        </div>
                        <div className="col-lg-3 text-end fs-5"><span>$20.98</span></div>
                    </div>
                    <div className="row py-2 d-flex align-items-center border-dashed-bottom">
                        <div className="col-lg-9">
                            <h3 className='mb-0'>The haus rib platter</h3>
                            <p className='mb-1'>½ pork sheet ribs, ½ baby back ribs and 1 bone Jacob's ladder</p>
                        </div>
                        <div className="col-lg-3 text-end fs-5"><span>$24.98</span></div>
                    </div>
                    <div className="row py-2 d-flex align-items-center border-dashed-bottom">
                        <div className="col-lg-9">
                            <h3 className='mb-0'>Steak & ribs</h3>
                            <p className='mb-1'>8oz Rump Steak and ½ pork sheet ribs</p>
                        </div>
                        <div className="col-lg-3 text-end fs-5"><span>$22.98</span></div>
                    </div>
                    <div className="row py-2 d-flex align-items-center border-dashed-bottom">
                        <div className="col-lg-9">
                            <h3 className='mb-0'>Kansas chicken & ribs</h3>
                            <p className='mb-1'>A whole kansas chicken breast with ½ a rack of pork sheet ribs</p>
                        </div>
                        <div className="col-lg-3 text-end fs-5"><span>$19.98</span></div>
                    </div>
                    <div className="row py-2 d-flex align-items-center border-dashed-bottom">
                        <div className="col-lg-8">
                            <h3 className='mb-0'>Jacob's ladder</h3>
                        </div>
                        <div className="col-lg-4 fs-5 text-end">
                        <span className='d-block '><small className='foodsection-price'>½ (2 bones) -</small>  $19.98</span>
                        <small className='foodsection-price1'>Full (4 bones) -</small><span> $24.98</span>
                         </div>
                    </div>
                    <p className='mb-0 py-2' style={{fontSize:'13px',color:'#FF9500'}}>All combos & ribs come with skin on fries & slaw</p>
                </div>
                <div className="col-lg-6 detailSection">
                    <img src="https://prium.github.io/tryposh/assets/images/restaurant-bbq.jpg" alt="" />
                </div>
            </div>
            <div className="row">
            <div className="col-lg-6 detailSection my-0 px-0">
                    <img src="https://prium.github.io/tryposh/assets/images/restaurant-burger.jpg" alt="" />
                </div>
                <div className="col-lg-6 ps-lg-5 pe-lg-2 mt-lg-4 foodDetailSection1">
                    <h2 className='mb-3 foodDetailSection-header'>Burgers</h2>
                    <div className="row py-2 d-flex align-items-center border-dashed-top border-dashed-bottom">
                        <div className="col-lg-9">
                            <h3 className='mb-0'>The smoke haus threesome</h3>
                            <p className='mb-1'>Pulled pork,slow cooked brisket and pastrami</p>
                        </div>
                        <div className="col-lg-3 text-end fs-5"><span>$20.98</span></div>
                    </div>
                    <div className="row py-2 d-flex align-items-center border-dashed-bottom">
                        <div className="col-lg-9">
                            <h3 className='mb-0'>The haus rib platter</h3>
                            <p className='mb-1'>½ pork sheet ribs, ½ baby back ribs and 1 bone Jacob's ladder</p>
                        </div>
                        <div className="col-lg-3 text-end fs-5"><span>$22.98</span></div>
                    </div>
                    <div className="row py-2 d-flex align-items-center border-dashed-bottom">
                        <div className="col-lg-9">
                            <h3 className='mb-0'>Steak & ribs</h3>
                            <p className='mb-1'>8oz Rump Steak and ½ pork sheet ribs</p>
                        </div>
                        <div className="col-lg-3 text-end fs-5"><span>$20.98</span></div>
                    </div>
                    <div className="row py-2 d-flex align-items-center border-dashed-bottom">
                        <div className="col-lg-9">
                            <h3 className='mb-0'>Kansas chicken & ribs</h3>
                            <p className='mb-1'>A whole kansas chicken breast with ½ a rack of pork sheet ribs</p>
                        </div>
                        <div className="col-lg-3 text-end fs-5"><span>$23.98</span></div>
                    </div>
                    <div className="row py-2 d-flex align-items-center border-dashed-bottom">
                        <div className="col-lg-8">
                            <h3 className='mb-0'>Jacob's ladder</h3>
                        </div>
                        <div className="col-lg-4 fs-5">
                        <span className='d-block '><small className='foodsection-price'>½ (2 bones) -</small>  $14.98</span>
                        <small className='foodsection-price1'>Full (4 bones) -</small><span> $19.98</span>
                         </div>
                    </div>
                    <p className='mb-0 py-2' style={{fontSize:'13px',color:'#FF9500'}}>All combos & ribs come with skin on fries & slaw</p>
                </div>
               
            </div>
            <div className="row ">
                <div className="col-lg-6 pe-lg-5 ps-lg-2 mt-5 foodDetailSection1">
                    <h2 className='mb-3 foodDetailSection-header'>Steak & Chicken</h2>
                    <div className="row py-2 d-flex align-items-center border-dashed-top border-dashed-bottom">
                        <div className="col-lg-9">
                            <h3 className='mb-0'>Kansas Chicken</h3>
                            <p className='mb-1'>Chicken breast fried in our own herbs and spices,served with ranch,fries & Slaw</p>
                        </div>
                        <div className="col-lg-3 text-end fs-5"><span>$10.98</span></div>
                    </div>
                    <div className="row py-2 d-flex align-items-center border-dashed-bottom">
                        <div className="col-lg-9">
                            <h3 className='mb-0'>½ Roast Chicken</h3>
                            <p className='mb-1'>½ Roasted half chicken with either our own BBQ sauce or a dry rub, served with fries & slaw</p>
                        </div>
                        <div className="col-lg-3 text-end fs-5"><span>$11.98</span></div>
                    </div>
                    <div className="row py-2 d-flex align-items-center border-dashed-bottom">
                        <div className="col-lg-9">
                            <h3 className='mb-0'>Chicken & Waffles</h3>
                            <p className='mb-1'>Kansas chicken on sweet waffles with sweet sauce and ranch dressing</p>
                        </div>
                        <div className="col-lg-3 text-end fs-5"><span>$14.98</span></div>
                    </div>
                </div>
                <div className="col-lg-6 detailSection">
                    <img id='detailsection-img' src="https://prium.github.io/tryposh/assets/images/restaurant-chicken.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetailSection;