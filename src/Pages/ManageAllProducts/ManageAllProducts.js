import React, { useEffect, useState } from 'react';
import ManageProductDetails from '../ManageProductDetails/ManageProductDetails';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://immense-sea-82529.herokuapp.com/item')
            .then(response => response.json())
            .then(data => setProducts(data))
            
    }, []);
    
    return (
        <div className='container'>
            <div className='row'>
            {
                products.slice(0,17).map(product=><ManageProductDetails product={product}></ManageProductDetails>)
            }
            

            </div>
           
        </div>
    );
};

export default ManageAllProducts;
