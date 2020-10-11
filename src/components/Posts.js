import React,{useEffect,useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import { fetchPosts } from '../redux/actions';

import Posttems from './Posttems';


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
         
            <table className="customers" width="100%">
                <thead>
            <tr>
                <th>Title</th>
                <th>Image</th> 
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>

          
             {postDetails.map(post=> {
                return (
                //     <tr key={post.id}>
                //         {isEdit ? 
                //             <input type="text"  value={value} onChange={(e)=>Editable(e.target.value)}/>
                //             :  <td>{post.title}</td>
                //         }
                   
                // <td><img src={post.thumbnailUrl}/></td>
                //     <td >
                //         <button  onClick={()=>dispatch(deletepost(post.id))}>Delete</button>
                //         <button onClick={EditFunc}>Edit</button>
                //       </td>
                // </tr>
                <Posttems key={post.id} post={post}/>
                )
           
            }
                )} 
           </tbody>
          
            </table>

        </>
    )
}



export default Posts;