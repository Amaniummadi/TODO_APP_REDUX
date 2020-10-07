

import React, {  useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { Table, Input, Popconfirm, Form,Divider,DatePicker } from 'antd';
import {  deleteTodo, updateTodo } from '../redux/actions';


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  handleDatePicker,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ?   
  <Input.Group compact>
 
  <DatePicker style={{ width: '70%' }}  onChange={handleDatePicker}/>
</Input.Group>: <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Todolist = () => {
  const [form] = Form.useForm();
  const todoDetails=useSelector(state=>state.todo)
  const [editabledate, setEditabledate] = useState(null)

 const dispatch=useDispatch();

const handleDatePicker = (value) =>{
  console.log("handleDatePicker",value);
  const newdate= value.format('YYYY-MM-DD')
  console.log("handleDatePicker",newdate);
 
  setEditabledate(newdate)
}

//   const [data, setData] = useState(todoDetails);
  

  const [editingKey, setEditingKey] = useState("");
 
  const isEditing = (record) => record.id === editingKey;
 
  const edit = (record) => {
    setEditabledate(record.date)
    form.setFieldsValue({
      action: '',
      date: '',
      ...record,
    });
  
    setEditingKey(record.id);

    dispatch(updateTodo(...todoDetails,{record}))

  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (id) => {
    try {
    
      const row = await form.validateFields();
      const newData = [...todoDetails];
   
      dispatch(updateTodo({
       
              id:id,
              action:row.action,
              date:editabledate,
          }));
     
    
     
      
      const index = newData.findIndex((item) => id === item.id);
     
     
    
      if (index > -1) {
        const item = newData[index];
  
     
        newData.splice(index, 1, { ...item, ...row });
        
    
     
        // setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        // setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Action',
      dataIndex: 'action',
      width: '25%',
      editable: true,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
      
        const editable = isEditing(record);
   
     
        return (
          <span>
          {
          editable ? (
            <span>
              <a
                href="javascript:;"
                onClick={() => save(record.id)}
                style={{
                  marginRight: 8,
                }}
              >
                Save
              </a>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a  href="javascript:;">Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <a disabled={editingKey !== ''} onClick={() => edit(record)}  href="javascript:;">
              Edit
            </a>
          )
          }
            <Divider type="vertical" />
               <Popconfirm title="Sure to delete?"  onConfirm={()=>dispatch(deleteTodo(record.id))}>
             <a  disabled={editingKey !== ''}  href="javascript:;">Delete</a>
          </Popconfirm>
      
          </span>
        )
 



      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    
    return {
      ...col,
      onCell: (record) => (
          {
        record,
        handleDatePicker,
        inputType: col.dataIndex === 'date' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
       
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={todoDetails}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}    
      />
    </Form>
  );
};

export default Todolist;
