export interface AuthState {
    token: Promise<{ value: string | null; }>,
    userId: Promise<{ value: string | null; }>,
    error: string | null,
    loading: boolean,
    authRedirectPath: string
};

export interface TodoListState {
    todoLists:Array<string>,
    totalCompletes:number,
    totalTasks:number,
    todos:Array<any>
}

export interface AuthContext{
    authState: AuthState,
    login:(email: string, password: string)
}