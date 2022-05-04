import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='container'>
            <div className='row'>
            {
                products.map(product=><ManageInventoryItem key={product._id} product={product}>
                    
                </ManageInventoryItem>)
            }

            </div>
            
            
            
            
        </div>
    );
};

export default ManageInventory;