import axios from 'axios';
import { FilesystemDirectory, Plugins } from '@capacitor/core';
import * as actionTypes from './types';

const { Storage, Filesystem } = Plugins;

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token: string, userId: string) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error: string) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    Storage.remove({ key: 'token' });
    Storage.remove({ key: 'expirationDate' });
    Storage.remove({ key: 'userId' });
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const auth = (email: string, password: string, isSignup: boolean) => (dispatch: any) => {
    dispatch(authStart());
    const authData = {
        email: email,
        password: password,

    };
    let url = 'http://localhost:8000/api/login';
    if (!isSignup) {
        url = 'http://localhost:8000/api/login';
    }
    axios.post(url, authData)
        .then(response => {
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 100000000);
            Storage.set({ key: 'token', value: response.data.token });
            Storage.set({ key: 'expirationDate', value: expirationDate.toDateString() });
            Storage.set({ key: 'userId', value: response.data.userId });
            dispatch(authSuccess(response.data.token, response.data.userId));
            dispatch(checkAuthTimeout(response.data.expiresIn));

        })
        .catch(err => {
            dispatch(authFail(err.response.data.error));
        });
};


export const checkAuthTimeout = (expirationTime: number) => (dispatch: any) => {
    setTimeout(() => {
        dispatch(logout());
    }, expirationTime * 1000);
};

export const setAuthRedirectPath = (path: string) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => async (dispatch: any) => {
    const token = await Storage.get({ key: 'token' });
    if (token) {
        dispatch(logout())
    } else {
        const expirationDate = new Date(Storage.get({ key: 'expirationDate' }).toString());
        if (expirationDate <= new Date()) {
            dispatch(logout());
        } else {
            const userId = Storage.get({ key: 'userId' }).toString();
            dispatch(authSuccess(token, userId));
            dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
    }


}