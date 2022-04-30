import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductName from '../ProductName/ProductName';

const Invetory = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(6)
    useEffect(() => {
        fetch('fakeData.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);
    const showData = () => {
        setLimit(prevValue => prevValue + 7)

    }

    return (


        <div className='container'>
            <h1 className='text-center p-4'><span style={{color:'Green'}}>Inventory</span> <span style={{color:'red'}}>Section</span></h1>
            <div className='row'>
                {
                    products.slice(0, limit).map(product => <ProductName product={product}></ProductName>)
                }

            </div>
            <div class="d-grid gap-2">
                <button onClick={showData} class="btn btn-primary mb-4" type="button">Manage Inventory</button>
                
            </div>

            





        </div>
    );
};

export default Invetory;