import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    //const onSubmit = data => console.log(data);

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
            <form className="d-flex flex-column"onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Enter product name' {...register("Name")} /><br/>
                <input placeholder='Description' {...register("description")} /><br/>
                <input placeholder='Your Mail' {...register("mail")} /><br/>
                <input placeholder='Price' {...register("price")} /><br/>
                <input placeholder='Image URL' {...register("img URL")} /><br/>
                
                <input type="submit" />
            </form>


        </div>
    );
};

export default AddItem;