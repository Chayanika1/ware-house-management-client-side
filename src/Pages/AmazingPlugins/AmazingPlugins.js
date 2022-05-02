import React from 'react';

import Company2 from '../../Images/Company2.png'
import Company3 from '../../Images/Company3.png'
import Company4 from '../../Images/Company4.jpg'
import Company5 from '../../Images/Company5.png'
import Company6 from '../../Images/Company6.png'


const AmazingPlugins = () => {
    return (
        <div>
            <h3 className='p-5 text-center'><span style={{color:'Red'}}>Some of Best</span ><span className='text-success'>Brands</span></h3>
            <div className='row text-center'>
            <div className='col-lg-4 col-sm-12'>
                <img src={Company4} alt=""/>
               
                
            </div>
            <div className='col-lg-4 col-sm-12'>
            <img src={Company2} alt=""/>
            

            </div>
            <div className='col-lg-4 col-sm-12'>
            <img src={Company3} alt=""/>
            

            </div>
            
        </div>
        <div className='row text-center'>
            <div className='col-lg-6 col-sm-12'>
                <img src={Company5} alt=""/>
            </div>
            <div className='col-lg-6 col-sm-12'>
                <img style={{ height:'150px'}}src={Company6} alt=""/>
            </div>
        </div>

        </div>
        
    );
};

export default AmazingPlugins;