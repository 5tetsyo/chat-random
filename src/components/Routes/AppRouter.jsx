import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { privateRoutes, publickRoutes } from './routes';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '../..';

const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);
    return user ? 
    (
        <Routes>
            {privateRoutes.map(({path, Component}) => <Route path={path} element={<Component/>} exact={true}/>)}
            <Route path='*' element={<Navigate to='/chat' replace />}></Route>
        </Routes>
    ) 
    : 
    (
        <Routes>
            {publickRoutes.map(({path, Component}) => <Route path={path} element={<Component/>} exact={true}/>)}
            <Route path='*' element={<Navigate to='/login' replace />}></Route>
        </Routes>
    )
};

export default AppRouter;