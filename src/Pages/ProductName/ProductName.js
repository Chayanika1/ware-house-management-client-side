import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductName = (props) => {
    const { name, suppliers, img, price, details, quantity } = props.product;
    const navigate = useNavigate();
    const showItemDetails=()=>{
        navigate('/ProductName/'+name)

    }
    return (





        <div class="g-5 rounded-3 col-sm-12 col-md-6 col-lg-4 shadow p-3 mb-5 bg-body rounded">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h6>Suppliers:{suppliers}</h6>
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{details}</p>
                    <h4>price:${price}</h4>
                    <h6>Quantity:{quantity}</h6>
                    <button onClick={showItemDetails}type="button" class="btn btn-primary">Stock Update</button>
                </div>
            </div>

        </div>


    );
};

export default ProductName;