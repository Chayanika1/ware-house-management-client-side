import React from 'react';
import Storage from '../../Images/Storage.png';
import Bandwidth from '../../Images/Bandwidth1.jpg';
import Domain1 from '../../Images/Domain1.jpg'

const Addition = () => {
    return (

        <div class="row">
            <h3 className='text-center p-4'><span style={{color:"purple"}}>We help</span> and <span className='text-primary'>solve your Problem</span></h3>
            <div class="col-lg-4 com-sm-12">

                <div class="card text-white bg-dark mb-3 text-center" >

                    <div class="card-body">
                        <img style={{ height: '50px', width: '30px' }} src={Storage} alt="" />
                        <h5 class="card-title">Unlimited Storage</h5>
                        <p class="card-text">Buy Pogoplug cloud Unlimited Cloud Storage and Backup online at low price in India on Amazon.in. Check out Pogoplug cloud Unlimited Cloud Storage and Backup</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12">

                <div class="card text-dark bg-light mb-3 text-center" >

                    <div class="card-body">
                        <img style={{ height: '50px', width: '30px' }} src={Bandwidth} alt="" />
                        <h5 class="card-title">Unlimited Bandwidth</h5>
                        <p class="card-text">Get started with in-car WiFi from  today. ... With eligible vehicle when you activate a new unlimited connected car data plan.Expect to pay anywhere from $10 to $50 per month to get Wi-Fi in your car through a built-in hotspot. $10.00–$25.00/mo</p>
                    </div>
                </div>

            </div>
            <div class="col">

                <div class="card text-white bg-primary mb-3 text-center">

                    <div class="card-body">
                        <img style={{ height: '50px', width: '30px' }} src={Domain1} alt="" />
                        <h5 class="card-title">Domain Registration</h5>
                        <p class="card-text">Vehicle Domains. A vehicle domain describes the grouping of systems and functions in a vehicle that can be assigned to individual areas. The way in which the individual systems,</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Addition;