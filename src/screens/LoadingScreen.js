import React, { useEffect, useContext } from 'react';
import { Context as AuthentificationContext } from '../context/AuthentificationContext';

const LoadingScreen = () => {
    const { tryLocalSignin } = useContext(AuthentificationContext);

    useEffect(() => {
        tryLocalSignin()
    }, []);
    
    return null;
}

export default LoadingScreen;