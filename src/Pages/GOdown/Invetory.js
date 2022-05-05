import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductName from '../ProductName/ProductName';

const Invetory = () => {
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://immense-sea-82529.herokuapp.com/item')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);
    
    
    const navigate = useNavigate();
    const manageInventory=()=>{
        navigate("/ManageInventory");

    }

    return (


        <div className='container'>
            <h1 className='text-center p-4'><span style={{color:'Green'}}>Inventory</span> <span style={{color:'red'}}>Section</span></h1>
            <div className='row'>
                {
                    products.slice(0, 6).map(product => <ProductName product={product}></ProductName>)
                }
                

            </div>
            <div className='text-center justify-center '>
            <button onClick={manageInventory} type="button" class="btn btn-secondary btn-lg mb-4">Manage Inventories</button>

            </div>
            
            
            

            





        </div>
    );
};

export default Invetory;