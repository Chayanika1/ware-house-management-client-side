import React, { useState, useSyncExternalStore } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


import { sendEmailVerification } from 'firebase/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import User2 from '../../Images/User2.png';



    

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fixedError, setFixedError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    //const [sendEmailVerification, sending] = useSendEmailVerification(
    //    auth
    //);
    const navigate = useNavigate()

    const handelEmail = (e) => {
        setEmail(e.target.value)
    }
    const handelPassword = (e) => {
        setPassword(e.target.value)
    }
    const handelConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleRegistration = (e) => {
        if (password !== confirmPassword) {
            alert('password not matched')
        }

        createUserWithEmailAndPassword(email, password, confirmPassword);
        e.preventDefault();


    }
    let errorElement;
    if (error) {
        errorElement = <p>{error.message}</p>
    }
    if (user) {
        navigate('/Home')
    }
    const verify=()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            toast('Email verification send')
        })
    }
    return (
        <div className='col-lg-6 col-sm-8 mx-auto border border-3 p-4 shadow-lg p-3 mb-5 bg-body rounded mt-3'>
            <div className='text-center'>
                <img style={{ height: '70px' }} src={User2} alt="" />

            </div>
            <h3 className='p-3 text-center'>Please Register <span style={{color:'purple'}}>Your-Self</span></h3>
             <form onSubmit={handleRegistration}>
                <div class="mb-3 text-center">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input style={{ width: '50%' }} onBlur={handelEmail} type="email" class="form-control mx-auto" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 text-center">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input style={{ width: '50%' }} onBlur={handelPassword}type="password" class="form-control mx-auto" id="exampleInputPassword1" required/>
                </div>
                <div class="mb-3 text-center">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input style={{ width: '50%' }} onBlur={handelConfirmPassword} type="password" class="form-control mx-auto" id="exampleInputPassword1" required/>
                </div>
                
                {errorElement}
                <div className='text-center'>
                <button onClick={ verify }type="submit" class="btn btn-primary">Register</button>

                </div>
                
                
                <p className='text-center'>Already have an account? then go to<Link className="p-3" style={{ textDecoration: 'none' }} to="/Login">Login</Link></p>
                <ToastContainer/>
            </form>
            <SocialLogin></SocialLogin>

            
        </div>
    );
};

export default Register;