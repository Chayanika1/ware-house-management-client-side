
import useServices from '../useServices';

const ManageInventoryItem = (props) => {
    const[services,setServices] = useServices()
    const { name, img, quantity, price, suppliers, details,_id } = props.product;
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
        
            <div class="g-5 rounded-3 col-sm-12 col-md-6 col-lg-4 shadow p-3 mb-5 bg-body rounded">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p>product id:{_id}</p>
                    <h6>Suppliers:{suppliers}</h6>
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{details}</p>
                    <h4>price:${price}</h4>
                    <h6>Quantity:{quantity}</h6>
                    <button onClick={()=>handelDelete(_id)}type="button" class="btn btn-danger">Delete</button>
                    
                </div>
            </div>
            
            
        </div>

       
        
            
        
        




        



    );
};

export default ManageInventoryItem;