import React from 'react';

const ProductName = (props) => {
    const{name} =props.product;
    return (
        <div>
            <h3>name={name}</h3>
            
        </div>
    );
};

export default ProductName;