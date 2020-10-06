//we are using this
import React,{useState} from 'react'
import {Table,Divider,Popconfirm, Button} from 'antd'
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import {  deleteUser, updateTodo } from '../redux/actions';

 function Userlist() {
    const [editable,setEditablle]=useState(false);
    const [name,setName]=useState();

    const userDetails=useSelector(state=>state.user)

    

const dispatch=useDispatch();


const onEdit= (id)=>{

    setEditablle(!editable)
}
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text =>{
            return(
                <><a >{text}</a>
              
                </>
            )
          } ,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },      
        {
            title:'Action',
            key:'action',
            render: (text, record) => (
                      <span >
                            <Button onClick={()=>onEdit(record.id)}>edit</Button>
                        <Divider type="vertical" />
                        <Popconfirm title="Sure to delete?" onConfirm={()=>dispatch(deleteUser(record.id))}>
                      <a>Delete</a>
                    </Popconfirm>
                      
                      </span>
                    ),
        },
        
      ];


    return (
        <>
          <Table columns={columns} dataSource={userDetails} />
        </>
    )
}

export default Userlist;










//wast