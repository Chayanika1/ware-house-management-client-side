import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Google from'../../Images/Google.png';



    
   
   
   
            

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if(user){
        navigate('/Home')
    }
    return (
        <div>
            <div class="d-grid gap-2">
                <button onClick={()=>signInWithGoogle()} class="btn btn-light border border-5 mb-4" type="button"><img className="rounded-circle"style={{height:'30px',width:'30px'}} src={Google}></img><span className='p-3'>Signin with Google</span></button>

            </div>
            
        </div>
    );
};

export default SocialLogin;