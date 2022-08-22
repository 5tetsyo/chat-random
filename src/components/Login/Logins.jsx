import React, { useContext } from 'react';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
    const {auth, firebase} = useContext(Context);
    const [user] = useAuthState(auth);
    const login = async() => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        (user);
    }
    return (
        <div>
            {user ?<button onClick={() => {auth.singOut()}}>LOG OUT</button> : <button style={{width: '200px', height: '50px', position: 'relative', marginTop: '20%', left: '45%'}} onClick={login}>LOGIN BY GOOGLE</button>}
        </div>
    );
};

export default Login;