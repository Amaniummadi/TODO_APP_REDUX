import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import {Button} from 'antd'
import OpenModal from './OpenModal'

import UserList from './UserList'
import { addUser } from '../redux/actions';

function UserTab() {
    
    const [visible, setVisible] = useState(false);
    const dispatch=useDispatch();
   const isDisplay=false;
  
    const onCreate = (values) => {
  console.log("added values in list",values)
      dispatch(addUser(
      {
          id:uuid(),
          name:values.title,
          email:values.email

      }
  )); 
    
      setVisible(false);
    };


    return (
        <>
              <Button style={{marginBottom:'10px'}}
                onClick={() => {
                  setVisible(true);
                }}
              >
               Create User
              </Button>
              <OpenModal 
              isDisplay={isDisplay}
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                  setVisible(false);
                }}
              />
            
              <UserList/>
        </>
    )
}

export default UserTab;