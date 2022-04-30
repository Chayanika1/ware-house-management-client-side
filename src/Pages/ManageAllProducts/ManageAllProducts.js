import React, { useEffect, useState } from 'react';
import ManageProductDetails from '../ManageProductDetails/ManageProductDetails';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);
    
    return (
        <div className='container'>
            <div className='row'>
            {
                products.slice(7,17).map(product=><ManageProductDetails product={product}></ManageProductDetails>)
            }
            

            </div>
           
        </div>
    );
};

export default ManageAllProducts;
