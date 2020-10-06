export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO= 'UPDATE_TODO';

export function addTodo(todo){

    return {
        type:ADD_TODO,
        payload:todo,
    }
}


export function deleteTodo(todoId){
  
    return {
        type:DELETE_TODO,
        payload:todoId,
    }
}

export function updateTodo(todo){

    return {
        type:UPDATE_TODO,
        payload:todo,
    }
}


// FOR USER DATAILS
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER= 'UPDATE_USER';

export function addUser(user){
  
    return {
        type:ADD_USER,
        payload:user,
    }
}


export function deleteUser(userId){

    return {
        type:DELETE_USER,
        payload:userId,
    }
}

export function updateUser(user){
 
    return {
        type:UPDATE_USER,
        payload:user,
    }
}