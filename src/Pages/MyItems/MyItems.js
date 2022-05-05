import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import MyItem from "../MyItem/MyItem";



const MyIteam = () => {
    const[user] = useAuthState(auth)
    const [findProduct, setFindProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const email = user?.email;
            console.log(email);
            const url = `https://immense-sea-82529.herokuapp.com/personalData?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });
                setFindProduct(data);
            } catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    alert("access forbidden, go to log in");
                    signOut(auth);
                    navigate("/login");
                }
            }
        };
        getProduct();
    },[user]);

    return (
        <div>
            <h1 className="text-center">my items</h1>
            <hr />
            <div className="container row">
                {findProduct.map((item) => (
                    <MyItem key={item._id} item={item}></MyItem>
                ))}
            </div>
        </div>
    );
};

export default MyIteam;