import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';
import useServices from '../useServices';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [services] = useServices();
    const findProduct = services.filter((p) => p.email === email);

    console.log(findProduct);
    return (
        <div>
            <h1 className="text-center">my items</h1>
            <hr />
            <div className="container row">
                {
                    findProduct.map(item => <MyItem item={item}></MyItem>)
                }
            </div>

        </div>
    );
};

export default MyItems;

