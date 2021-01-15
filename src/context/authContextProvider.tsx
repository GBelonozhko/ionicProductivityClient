import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import AuthContext from './authContext';
import axios from 'axios';

import { Plugins } from '@capacitor/core';

const { Storage} = Plugins;

const AuthContextProvider: React.FC = (props) => {

    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const login = (email: string, password:string) =>{
        setLoading(true);
        axios.post('http://localhost:8000/api/login', {email, password})
        .then(response => {
             setToken( response.data.token);
             setUserId(response.data.userId);
             setLoading(false);
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 100000000);
            Storage.set({ key: 'token', value: response.data.token });
            Storage.set({ key: 'expirationDate', value: expirationDate.toDateString() });
            Storage.set({ key: 'userId', value: response.data.userId });
            

        })
        console.log(token)
    }

    return (
        <AuthContext.Provider value ={{token, userId, error, loading, login}}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;