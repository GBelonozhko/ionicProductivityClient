import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import { FilesystemDirectory, Plugins } from '@capacitor/core';

const { Storage, Filesystem } = Plugins;

const initialState = rootReducer;

const saveToLocalStorage = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        Storage.set({ key: 'serializedState', value: serializedState })
    } catch (e) {
        console.log(e)
    }
};

const loadFromLocalStorage = async () =>{
    try {
    const serializedState = await Storage.get({key:'state'});
    if(serializedState === null)
    { return undefined}
    else{
        return JSON.parse(serializedState.toString())
    }
    
    } catch (e) {
    return undefined
    }
}
    
const peristedState = loadFromLocalStorage().toString();



const composeEnhancers = composeWithDevTools({
    name:"Redux", 
       
}); 

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));

store.subscribe(() => {
    saveToLocalStorage(store.getState());
  
  });
  
  store.getState()

export default store;