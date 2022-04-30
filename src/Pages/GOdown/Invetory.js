import React, { useEffect, useState } from 'react';
import ProductName from '../ProductName/ProductName';

const Invetory = () => {
    const[products,setProducts]= useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(response=>response.json())
        .then(data=>setProducts(data))
    },[])
    return (

       
        <div className='container'>
            <div className='row'>
            {
                products.slice(0,6).map(product=><ProductName product={product}></ProductName>)
            }

            </div>
            
            
        </div>
    );
};

export default Invetory;