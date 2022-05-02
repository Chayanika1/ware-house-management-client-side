import React from 'react';

const Vlogs = () => {
    return (
        <div className='p-4'>
            <div className='row'>
                <div className='col-lg-4 col-sm-12'>
                    <div class="card text-white bg-secondary mb-3">
                        <div class="card-header">What is the difference between Node js and JavaScript?</div>

                        <div class="card-body">

                            <p class="card-text">Javascript is a programming language and
                                NodeJS is a javascript runtime environment.</p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-4 col-sm-12'>
                    <div class="card text-white bg-danger mb-3">
                        <div class="card-header">Difference between sql and nosql databases</div>

                        <div class="card-body">

                            <p class="card-text">SQL databases are vertically scalable and NoSQL databases are horizontally scalable.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-4 col-sm-12'>
                    <div class="card text-dark bg-warning mb-3" >
                        <div class="card-header">What is the purpose of jwt? and how its work?</div>
                        <div class="card-body">
                            
                            <p class="card-text">jwt is a mechanism to verify the owner of some JSON data.
                            jwt also allows us to use same JSON web token in multiple servers.</p>
                        </div>
                    </div>

                </div>
            </div>
            
            

        </div>
    );
};

export default Vlogs;