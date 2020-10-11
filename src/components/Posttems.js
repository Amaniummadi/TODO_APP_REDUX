import React,{useState} from 'react'
import {  deletepost, updatepost } from '../redux/actions';
import {useDispatch,useSelector} from 'react-redux'


export default function Posttems({post}) {
    
    const [isEdit, setIsEdit] = useState(false)
    const [value, setValue] = useState( post.title)
    const dispatch=useDispatch();
    const Editable = (name) =>{
        setValue(name);
        console.log("edittable text");
    }
    const EditFunc= ()=> {
        console.log("editFucs");
        setIsEdit(!isEdit);
        dispatch(updatepost(
            {...post,
                title:value
            }
        ))
    }
    return (
        <>
           <tr >
                     {isEdit ? 
                 
                    <input type="text"  value={value} onChange={(e)=>Editable(e.target.value)}/>
                   
                          
                            :  <td>{post.title}</td>
                        }
                   
                <td><img src={post.thumbnailUrl} width="100px"/></td>
                    <td >
                        <button  onClick={()=>dispatch(deletepost(post.id))} style={{margin:"5px"}}>Delete</button>
                    <button onClick={EditFunc}  style={{margin:"5px"}}> { isEdit ?  "Update" : "Edit" }</button>
                      </td>
                </tr>
        </>
    )
}
