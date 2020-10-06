import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import {Button} from 'antd'

import OpenModal from './OpenModal'

import { addTodo } from '../redux/actions';
import Todolist from './TodoList';

function Todotab() {
    
    const [visible, setVisible] = useState(false);
    const dispatch=useDispatch();
    const isDisplay=true;
  
    const onCreate = (values) => {
//   const datepicker=values['date-picker'].format('YYYY-MM-DD'));
      dispatch(addTodo(
      {
          id:uuid(),
          action:values.Action,
          date:values['date-picker'].format('YYYY-MM-DD'),

      }
  ));
    
      setVisible(false);
    };


    return (
        <>
              <Button type="primary" style={{marginBottom:'10px'}}
                onClick={() => {
                  setVisible(true);
                }}
              >
               Create Todo
              </Button>
              <OpenModal 
            isDisplay={isDisplay}
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                  setVisible(false);
                }}
              />
            <Todolist/>
           
        </>
    )
}

export default Todotab;