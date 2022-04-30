import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const[user] = useAuthState(auth);
    const handelSignOut=()=>{
        signOut(auth);
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <h3>Riya's Deport</h3>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
                            {
                                user ?<button onClick={handelSignOut}>SignOut</button>:<Link class="nav-link" to="/Login">Login</Link>
                            }
                            
                            <Link class="nav-link" to="/Register">Register</Link>
                            
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;