import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';
import useServices from '../useServices';

const MyItems = () => {
    const[user]  =useAuthState(auth);
    const email  =user ?.email;
    const[services] = useServices();
    const find = services.filter(service=>service.email === email);
    console.log(find) 
    return (
        <div>
            <h1>My Items</h1>
            {
                find.map(item=><ManageInventoryItem item={item}></ManageInventoryItem>)
            }
            
        </div>
    );
};

export default MyItems;