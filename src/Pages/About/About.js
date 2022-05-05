import React from 'react';
import About1 from '../../Images/About.jpg';

const About = () => {
    return (
        <div>
            <div className='row border border-success mb-4 rounded-3 mt-4'>
                <div className='col-lg-6 col-sm-12'>
                    <h4 className='text-center p-5'> <img style={{height:'50px'}} src={About1} alt=""/>For more info contact us on</h4>
                    
                    
                    
                    

                </div>
                <div className='col-lg-6 col-sm-12 p-4'>
                    <h6> <i class="fa fa-envelope p-2" aria-hidden="true"></i>secure@gmail.com</h6>
                    <h6><i class="fa fa-phone p-2" aria-hidden="true"></i>123456789</h6>
                    <h6> <i class="fa fa-map-marker p-2" aria-hidden="true"></i>456,newYork town</h6>
                </div>
            </div>
            
        </div>
    );
};

export default About;