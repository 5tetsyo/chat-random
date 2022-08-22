import React, { useContext } from 'react';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const {auth, firebase} = useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <div>
            {user ?<button onClick={() => {auth.singOut()}}>LOG OUT</button> : <button onClick={login}>LOGIN BY GOOGLE</button>}
        </div>
    );
};

export default Header;