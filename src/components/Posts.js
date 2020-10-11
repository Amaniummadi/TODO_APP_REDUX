import React,{useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import { fetchPosts } from '../redux/actions';


 function Posts() {
  
        const dispatch=useDispatch();
        useEffect(() => {
            const data=dispatch(fetchPosts())
            console.log("data",data);
        }, [])


const postDetails=useSelector(state=>state.posts)
      console.log("post details",postDetails.posts);
    return (
        <>
            <h1>hello</h1>
        </>
    )
}



export default Posts;