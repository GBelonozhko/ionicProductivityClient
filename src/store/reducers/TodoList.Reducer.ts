import * as actionTypes from '../actions/types';
import {updateObject} from '../../shared/utility';

export interface TodoListState {
    todoLists:Array<string>,
    totalCompletes:number,
    totalTasks:number,
    todos:Array<any>
}

const initialState = {
    todoLists:[],
    totalCompletes:0,
    totalTasks:0,
    todos:[]
}

const setTodoLists = (state:TodoListState, action:any) => {
    return updateObject(state,{
        todoLists:action.todoLists,
    });
} ;

const setTodos = (state:TodoListState, action:any) => {
    let updatedList = state.todos;

    updatedList.push({title: action.title, todos: action.todos});

    return updateObject(state,{
        todos: updatedList
    });
};

const setCompleteCount = (state:TodoListState, action:any) => {
    return updateObject(state, {
        totalCompletes: action.totalCompletes,
    });
};

const setTotalTasks =(state:TodoListState, action:any) =>{
    return updateObject(state, {
        totalTasks:action.totalTasks
    })
}

const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        case actionTypes.SET_TODO_LISTS:
            return setTodoLists(state, action);
        
        case actionTypes.SET_TODOS:
            return setTodos(state, action);

        case actionTypes.SET_COMPLETE_COUNT:
            return setCompleteCount(state,action);
        
        case actionTypes.SET_TOTAL_TASKS:
            return setTotalTasks(state,action);
        
       
       
       
            default:
            return state;
    }
};

export default reducer;