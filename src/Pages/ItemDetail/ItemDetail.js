import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    //const params = useParams()
    const{name} = useParams();
    return (
        <div>
            <h1>this is item detail:{name}</h1>
            
        </div>
    );
};

export default ItemDetail;