import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import React from 'react';
import auth from '../Firebase/firebase.init';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) =>{
            console.log(result);
        })
        .catch(error =>{
            console.log('Error',error)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>login with google</button>
        </div>
    );
};

export default Login;