import React, { useEffect, useState } from 'react';
import ProductName from '../ProductName/ProductName';

const GoDown = () => {
    const[products,setProducts]= useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(response=>response.json())
        .then(data=>setProducts(data))
    },[])
    return (

       
        <div>
            {
                products.map(product=><ProductName product={product}></ProductName>)
            }
            
        </div>
    );
};

export default GoDown;