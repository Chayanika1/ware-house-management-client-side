import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const [items, setItems] = useState({});
    useEffect(() => {

        fetch('fakeData.json')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    const { name } = useParams();
    const navigate = useNavigate();
    const details=()=>{
        navigate('/Home')
    }
    return (
        <div>

            <div class="card">
                <img src="" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h6>Suppliers:</h6>
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{items.details}</p>
                    <h4>price:</h4>
                    <h6>Quantity:</h6>
                    <button type="button" class="btn btn-primary">Delivered</button>
                </div>
            </div>
            <div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Update</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                    </div>
                    
                    <button type="submit" class="btn btn-primary mb-4">Submit</button>
                </form>
            </div>
            <div class="d-grid gap-2">
                <button onClick={details} class="btn btn-primary" type="button">Manage Inventory</button>
                
            </div>

        </div>
    );
};

export default ItemDetail;