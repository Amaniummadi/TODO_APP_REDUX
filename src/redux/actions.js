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



//post actions
export const GET_POSTS = 'GET POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const getPosts = () => ({ type: GET_POSTS })
export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
})
export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE })

export function fetchPosts() {
  return async dispatch => {
    dispatch(getPosts())

    try {
      const response = await fetch('http://jsonplaceholder.typicode.com/photos')
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}




// FOR post DATAILS
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST= 'UPDATE_POST';

export function addpost(post){
  
    return {
        type:ADD_POST,
        payload:post,
    }
}


export function deletepost(postId){
console.log("postid",postId);
    return {
        type:DELETE_POST,
        payload:postId,
    }
}

export function updatepost(post){
 
    return {
        type:UPDATE_POST,
        payload:post,
    }
}

