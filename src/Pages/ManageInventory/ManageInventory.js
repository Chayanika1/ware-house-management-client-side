import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ManageInventory.css';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('https://immense-sea-82529.herokuapp.com/item')
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
            <div className='text-center mx-auto mb-4'>
            <Link className='btn btn-primary' to='/AddItem'><i class="fa-solid fa-plus-large"></i>Add Item</Link>

            </div>
            
            
            
            
            
        </div>
    );
};

export default ManageInventory;