import Axios from 'axios';
import axios from 'axios';


import * as actionTypes from './types';

const API = process.env.API

export const initTodoLists = (userId: string) => (dispatch:any) => {
    axios.get(`/api/todolists/${userId}`, { params: { "userId": userId } })
        .then(res =>
            dispatch(setTodoLists(res.data.todos))
            .catch(
            dispatch(fetchTodosFailed())
            )
        )
};

export const setTodoLists = (todoListsTitles: string) => {
    return {
        type:actionTypes.SET_TODO_LISTS,
        todoLists:todoListsTitles
    }
};

export const initTodos = (userId:string, todoListName:string) => (dispatch:any) => {
    axios.get(`${process.env.API}/api/todolist/${userId}/${todoListName}`)
        .then(res=>{
            return dispatch(setTodos(res.data.todoList, res.data.title))
        }).catch(error => {
            dispatch(fetchTodosFailed())
        })
};

export const setTodos = (todos: any, title: any ) => {
    return {
        type: actionTypes.SET_TODOS,
        todos: todos,
        title: title
    }
}

export const initCompleteCount = (userId: string) => (dispatch:any) => {
    axios.get(`${process.env.API}/api/todolistCompletes/${userId}`)
        .then(res => {
            dispatch(setCompleteCount(res.data.Completes))
        })
}

export const setCompleteCount =(completeCount: number)=> {
    return{
        type:actionTypes.SET_COMPLETE_COUNT,
        totalCompletes:completeCount
    }
}

export const initTotalTasks = (userId:string) => (dispatch:any) => {
    axios.get(`${process.env.API}/api/todolisttasksCreated/${userId}`)
        .then(res => {
            dispatch(setTotalTasks(res.data.totalTasks))
        })
}

export const setTotalTasks = (totalTasks:number) => {
    return{
        type: actionTypes.SET_TOTAL_TASKS,
        totalTasks:totalTasks
    }
}

export const fetchTodosFailed = () => {
    return {
        type:actionTypes.FETCH_TODOS_FAILED
    }
}

