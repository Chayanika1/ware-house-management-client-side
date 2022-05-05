import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import User1 from '../../Images/User1.png';
import axios from 'axios';








const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)

    }
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email });
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        navigate('/Home')


    }
    let errorElement;

    if (error) {
        errorElement = <p>Error : {error.message}</p>
    }
    const resetPassword =  () => {
        //const email = emailRef.current.value;
         sendPasswordResetEmail(email,auth);
        toast("Sent email");



    }
    return (
        <div className='col-lg-6 col-sm-8 mx-auto border border-3 p-4 shadow-lg p-3 mb-5 bg-body rounded mt-3'>
            <div className='text-center'>
                <img style={{ height: '70px' }} src={User1} alt="" />

            </div>

            <h3 className='p-3 text-center'>Please Login <span style={{ color: 'orange' }}>Your Self</span></h3>
            <form onSubmit={handleLogin}>

                <div class="mb-3 text-center">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>

                    <input style={{ width: '50%' }} onBlur={handleEmail} type="email" class="form-control mx-auto" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>



                </div>
                <div class="mb-3 text-center">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input style={{ width: '50%' }} onBlur={handlePassword} type="password" class="form-control mx-auto" id="exampleInputPassword1" />
                </div>

                {errorElement}
                <div className='text-center'>
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
                <p className='text-center'>Don't have any account? then go to<Link className="p-3" style={{ textDecoration: 'none' }} to="/Register">Register</Link></p>
                <p className='text-center'>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                <ToastContainer />
            </form>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;