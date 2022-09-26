import React from 'react';
import Banner1 from '../../Images/Banner1.jpg';
import Banner2 from '../../Images/Banner2.jpg';
import Banner3 from '../../Images/Banner3.jpg';
import './Carousel.css';
const Carousel = () => {
    return (
        <div className='container ' id="com">
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <img className='img-fluid' src={Banner2} alt=""></img>
                </div>
                <div className='col-lg-6 col-sm-12 mt-3'>
                    <p>Turbo Motors Original Parts, when used, ensure an optimum ownership cost of the vehicle and in a developing country like ours, road safety is yet another important aspect which needs attention at all costs. This is possible only through usage of original parts, where manufacturing and material come together to create superior and dependable spares Regular operation of your vehicle causes wear and tear of components. To ensure that your car continues to be reliable, economical and safe, you need to regularly and scientifically replace components during maintenance schedules. Tata Motors continuously strives to provide excellent customer support through technological expertise in maintaining the vehicle for years to come</p>
                    <div className='text-center'>
                    <button type="button" class="btn btn-primary btn-lg text-center m-4">Learn More</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Carousel;