import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import {Button} from 'antd'
import TodoModal from './TodoModal'

import { addTodo } from '../redux/actions';
import Todolist from './TodoList';

function Todotab() {
    
    const [visible, setVisible] = useState(false);
    const dispatch=useDispatch();
  
    const onCreate = (values) => {
//   const datepicker=values['date-picker'].format('YYYY-MM-DD'));
      dispatch(addTodo(
      {
          id:uuid(),
          action:values.title,
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
              <TodoModal 
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                  setVisible(false);
                }}
              />
            <Todolist/>
              {/* <EditableTable/> */}
        </>
    )
}

export default Todotab;