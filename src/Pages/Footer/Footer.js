import React from 'react';

const Footer = () => {
    return (
        <div className='container bg-dark text-center p-4' style={{color:'white'}}>
            <h1 className='text-center p-2'>ENVOY</h1>
            <div className='row'>
                <div className='col-lg-4 col-sm-12'>
                    
                    <p>we create possibilities for the connected world.
                        <p><b>Be Bold</b></p>
                    </p>
                </div>
                
                <div className='col-lg-4 col-sm-12'>
                    <h6>Visit</h6>
                    <p>Envoy So.California 34 Tesla,Ste 100 Irvine,Ca,USA 92618</p><br/>
                    <h5>New Business</h5>
                    <p>engage@weareevoy.com 949 333 3106</p>
                    
                </div>
                
                <div className='col-lg-4 col-sm-12'>
                    <h6>Legal</h6>
                    <p>Terms</p><br/>
                    <p>Privacy</p>

                </div>
            </div>
              <h6>&copy; 2022 Envoy,All Rights reserved.</h6>
            
        </div>
    );
};

export default Footer;