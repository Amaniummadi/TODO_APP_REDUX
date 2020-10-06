import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import {Button} from 'antd'
import UserModal from './UserModal'

import EditableTable from './EditableTable'
import { addUser } from '../redux/actions';

function UserTab() {
    
    const [visible, setVisible] = useState(false);
    const dispatch=useDispatch();
  
    const onCreate = (values) => {
  
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
              <UserModal 
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                  setVisible(false);
                }}
              />
            
              <EditableTable/>
        </>
    )
}

export default UserTab;