import React from 'react';

const MyItem = ({ item: { price, img,quantity,name,description } }) => {

    return (
        <div>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">{name}</h3>
                            <h5 class="card-text">Price:${price}</h5>
                            <p>{description}</p>
                            <p class="card-text"><small class="text-muted">Quantity :{quantity}</small></p>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyItem;