import React from 'react';
import './Reviews.css';
import person1 from '../../src/Images/person1.jpg';
import person2 from '../../src/Images/person2.jpg';
import person3 from '../../src/Images/person3.jpg';
const Reviews = () => {
    return (
        <div className='container'id='review'>
            <h1 className='text-center m-4 p-4'> CUSTOMER REVIEWS</h1>
            <div class="card mb-3" >
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                    <img  id="my"src={person1} class="card-img-top img-fluid" alt="..."/>
                        
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                    <div class="card-body">
                        <h5 class="card-title">mr.pk</h5>
                        <p class="card-text">Find Quality Products from Verified Suppliers. Get a Live Quote Now! Trade Assurance. Logistics Service. Most Popular. Production Monitoring. Types..</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>

                    </div>
                </div>
                
                    
            </div>
            <div class="card mb-3">
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                    <img id="my"src={person2} class="card-img-top" alt="..."/>
                        
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                    <div class="card-body">
                        <h5 class="card-title">Pilu</h5>
                        <p class="card-text">Tata Motors Original Parts, when used, ensure an optimum ownership cost of the vehicle and in a developing country like ours, road safety is yet another important aspect which needs attention at all costs. This is possible only through usage of original parts, where manufacturing and material

</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>

                    </div>
                </div>
                
                    
            </div>
            <div class="card mb-3">
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                    <img id="my"src={person3} class="card-img-top" alt="..."/>
                        
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                    <div class="card-body">
                        <h5 class="card-title">Boss</h5>
                        <p class="card-text">Find Quality Products from Verified Suppliers. Get a Live Quote Now! Trade Assurance. Logistics Service. Most Popular. Production Monitoring. Types.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>

                    </div>
                </div>
                
                    
            </div>
            
            

        </div>
    );
};

export default Reviews;