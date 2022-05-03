import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import useServices from '../Pages/useServices';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    //const onSubmit = data => console.log(data);
    const [user] = useAuthState(auth);
    const [services] = useServices();
    


    const onSubmit = (data) => {
        
        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => console.log("happy", result))


    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center p-3'><span style={{ color: 'red' }}>Add Your</span>favourite <span style={{ color: 'blue' }}>item here</span></h2>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>

                <input className='border border-primary p-1 rounded-3 shadow p-3 mb-1 bg-body rounded text-center mx-auto w-75' placeholder='Enter product quantity' {...register("quantity")}  /><br />
                <input className='border border-primary p-1 rounded-3 shadow p-3 mb-1 bg-body rounded text-center mx-auto w-75' placeholder='Description' {...register("description")} /><br />
                <input className='border border-primary p-1 rounded-3 shadow p-3 mb-1 bg-body rounded text-center mx-auto w-75'  placeholder='Your Mail'{...register("mail")} required /><br />
                <input className='border border-primary p-1 rounded-3 shadow p-3 mb-1 bg-body rounded text-center mx-auto w-75' placeholder='Price' {...register("price")} /><br />
                <input className='border border-primary p-1 rounded-3 shadow p-3 mb-1 bg-body rounded text-center mx-auto w-75' placeholder='Image URL' {...register("img URL")} /><br />

                <input class="btn btn-primary mb-4" type="submit" />
            </form>


        </div>
    );
};

export default AddItem;