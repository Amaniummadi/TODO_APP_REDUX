import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { Table, Input, InputNumber, Popconfirm, Form,Divider } from 'antd';
import {  deleteUser, updateUser } from '../redux/actions';


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
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

const UserList = () => {
  const [form] = Form.useForm();
  const userDetails=useSelector(state=>state.user)

 const dispatch=useDispatch();



  const [data, setData] = useState(userDetails);
  

  const [editingKey, setEditingKey] = useState("");
 
  const isEditing = (record) => record.id === editingKey;
 
  const edit = (record) => {
  
    form.setFieldsValue({
      name: '',
      email: '',
      ...record,
    });
  
    setEditingKey(record.id);
   
   
    dispatch(updateUser(...userDetails,{record}))

  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...userDetails];
   
      dispatch(updateUser({
       
              id:id,
              name:row.name,
              email:row.email,
          }));
     
    
     
      
      const index = newData.findIndex((item) => id === item.id);
     
     
    
      if (index > -1) {
        const item = newData[index];
     
     
        newData.splice(index, 1, { ...item, ...row });
        
    
     
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '40%',
      editable: true,
    },
    {
      title: 'Action',
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
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <a disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
            </a>
          )
          }
            <Divider type="vertical" />
               <Popconfirm title="Sure to delete?" disabled={editingKey !== ''}  onConfirm={()=>dispatch(deleteUser(record.id))}>
             <a>Delete</a>
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
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'name' ? 'text' : '',
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
        dataSource={userDetails}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default UserList;
