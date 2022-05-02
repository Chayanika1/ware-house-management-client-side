import React, { useEffect, useState } from 'react';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='container'>
            <div className='row'>
            {
                products.map(product=><ManageInventoryItem product={product}>
                    
                </ManageInventoryItem>)
            }

            </div>
            <button>Add new Item</button>
            
            
            
        </div>
    );
};

export default ManageInventory;