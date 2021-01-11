import { combineReducers } from "redux";
import auth from './Auth.Reducer';
import todoList from './TodoList.Reducer';

export default combineReducers({
    Auth:auth,
    TodoList:todoList
});
