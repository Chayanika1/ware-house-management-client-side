import React from 'react';

const MyItem = ({f:{price,img}}) => {
    
    return (
        <div>
            <h3>My Orders</h3>
            <h2>name:{price}</h2>
            <img src={img} alt=""/>
            
        </div>
    );
};

export default MyItem;