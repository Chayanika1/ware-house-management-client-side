import React from 'react';

import useServices from '../useServices';

const MyItem = ({ item: { price, img,quantity,name,description,_id } }) => {
    const[services,setServices] = useServices();
    const handelDelete=(id)=>{
        console.log(id)
        const proceed = window.confirm('are you want to delete?');
        if(proceed){
            const url =`https://immense-sea-82529.herokuapp.com/item/${id}`
            fetch(url,{
                method :'DELETE',

            })
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                const remainItem = services.filter(service=>service._id !== id)
                setServices(remainItem);
                console.log(remainItem);
            });
            window.location.reload()


        }
        
        
    }
    
    
    
      

    return (
        <div>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">{name}</h3>
                            <h5 class="card-text">Price:${price}</h5>
                            <p>{description}</p>
                            <p class="card-text"><small class="text-muted">Quantity :{quantity}</small></p>
                            <button onClick={()=>handelDelete(_id)} type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyItem;