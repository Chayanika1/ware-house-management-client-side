import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';


const ItemDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit } = useForm()
    
    const [items, setItems] = useState({});
    useEffect(() => {
        const url = `https://immense-sea-82529.herokuapp.com/item/${id}`;
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);
    //update value
    const onSubmit=(data)=>{
        fetch(`https://immense-sea-82529.herokuapp.com/item/${id}?prevQuantity=${items.quantity}`,{
            method:'put',
            headers :{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(result=>{
            console.log("success",result);
            alert("updated successfully");

        });
        window.location.reload()

    }
    //decrease value
    const decreaseValue = () => {
        fetch(`https://immense-sea-82529.herokuapp.com/items/${id}?prevQuantity=${items.quantity}`, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            alert('Delivery successfull, reload this page')
          });
          window.location.reload()
      }
    

    
    
    const manageInventory=()=>{
        navigate("/ManageInventory");

    }
    
    

    return (
        <div>
            


            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src={items.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{items.name}</h5>
                            <p class="card-text">{items.details}</p>
                            <h4>price:{items.price}</h4>
                            <h6>Quantity:{items.quantity}</h6>
                            <button onClick={decreaseValue} type="button" class="btn btn-primary">Delivered</button>
                        </div>
                    </div>
                </div>
                <div>
                <form className="d-flex flex-column"onSubmit={handleSubmit(onSubmit)}>
                <input  className='mx-auto'style={{width:'50%'}} placeholder='Enter product quantity' required type="number" {...register("quantity") } /><br/>
                
                
                
                <input style={{width:'25%'}} className='btn btn-warning mx-auto' type="submit"/>
                
            </form>
                </div>
                <div class="d-grid gap-2">
                <button  onClick={manageInventory} type="button" class="btn btn-info mb-4">Manage Inventories</button>

                </div>

    </div>
        </div>
    );
};

export default ItemDetail;