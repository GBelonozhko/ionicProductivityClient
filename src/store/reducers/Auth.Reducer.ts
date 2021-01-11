import * as actionTypes from '../actions/types';
import { updateObject } from '../../shared/utility';
import { FilesystemDirectory, Plugins } from '@capacitor/core';
import { AuthState } from '../../interface';

const { Storage, Filesystem } = Plugins;


const initialState = {
    token: Storage.get({ key: 'token' }),
    userId: Storage.get({ key: 'userId' }),
    error: null,
    loading: false,
    authRedirectPath: '/'
};

const authStart = (state: AuthState, action: any) => {
    return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state: AuthState, action: any) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false

    });
};

const authFail = (state: AuthState, action: any) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state: AuthState, action: any) => {
    return updateObject(state, { token: null, userId: null });
};

const setAuthStateRedirectPath = (state: AuthState, action: any) => {
    return updateObject(state, { authRedirectPath: action.path });
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthStateRedirectPath(state, action);
        default:
            return state;
    }
}

export default reducer;