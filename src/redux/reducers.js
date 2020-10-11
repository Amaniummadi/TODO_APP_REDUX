
import {combineReducers} from 'redux'
import {ADD_TODO,DELETE_TODO,UPDATE_TODO,ADD_USER,DELETE_USER,UPDATE_USER,GET_POSTS,GET_POSTS_FAILURE,GET_POSTS_SUCCESS,ADD_POST,DELETE_POST,UPDATE_POST,fetchPosts} from './actions'
import {todos,userDetails,ApiinitialState} from './states'


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
            return newTodos;
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
            return newUsers;
        default:
            return state;
      
    }
  
       
}

 function postsReducer(state = ApiinitialState, action) {
    let newposts
    switch (action.type) {

      case GET_POSTS_SUCCESS:
        newposts=[...state,action.payload];
        return  newposts[0];
    
        case ADD_POST:
            newposts=[...state];
            newposts=[...state,action.payload];

         return newposts;
         case DELETE_POST:
            newposts=[...state];
            console.log("neewofgdg",newposts);
            newposts=newposts.filter(todo=>todo.id!==action.payload)
console.log(newposts);
         return newposts;
         
        case UPDATE_POST:
            newposts=[...state];
            
            let index=-1;
            for(let i=0 ; i < newposts.length;i++){
                index++;
                if(newposts[i].id === action.payload.id){
                    break;
                }
               
            }
            if(index !== -1){
                newposts[index]=action.payload;
                return newposts;
            } 
            return newposts;
      default:
        return state
    }
  }





export const rootReducer = combineReducers({
    todo: todoReducer,
    user:userReducer,
    posts:postsReducer,
   
   
  })