import {combineReducers} from 'redux'
import {ADD_TODO,DELETE_TODO,UPDATE_TODO,ADD_USER,DELETE_USER,UPDATE_USER} from './actions'
import {todos,userDetails} from './states'
const todoReducer=(state = todos,action)=>{
    let newTodos
    switch (action.type) {
        case ADD_TODO:
           newTodos=[...state];
            newTodos=[...state,action.payload];

         return newTodos;
        case DELETE_TODO:
           newTodos=[...state];
            newTodos=newTodos.filter(todo=>todo.id!==action.payload)

         return newTodos;

        case UPDATE_TODO:
            newTodos=[...state];
            let index=-1;
            for(let i=0 ; i < newTodos.length;i++){
                index++;
                if(newTodos[i].id === action.payload.id){
                    break;
                }
               
            }
            if(index !== -1){
                newTodos[index]=action.payload;
                return newTodos;
            }  
        default:
            return state;
      
    }
  
       
}

//for user
const userReducer=(state = userDetails,action)=>{
  
    let newUsers
    switch (action.type) {
        case ADD_USER:
            newUsers=[...state];
            newUsers=[...state,action.payload];

         return newUsers;
        case DELETE_USER:
            newUsers=[...state];
            newUsers=newUsers.filter(todo=>todo.id!==action.payload)

         return newUsers;

        case UPDATE_USER:
            newUsers=[...state];
            
            let index=-1;
            for(let i=0 ; i < newUsers.length;i++){
                index++;
                if(newUsers[i].id === action.payload.id){
                    break;
                }
               
            }
            if(index !== -1){
                newUsers[index]=action.payload;
                return newUsers;
            }  
        default:
            return state;
      
    }
  
       
}


export const rootReducer = combineReducers({
    todo: todoReducer,
    user:userReducer,
   
  })