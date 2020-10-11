import React, { useState ,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { Table, Input, InputNumber, Popconfirm, Form,Divider } from 'antd';
import {  deletepost, updatepost } from '../redux/actions';
import { fetchPosts } from '../redux/actions';


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

const PostList = () => {
  const [form] = Form.useForm();
  
 const dispatch=useDispatch();


 useEffect(() => {
    const data=dispatch(fetchPosts())
    console.log("data",data);
}, [])


const postDetails=useSelector(state=>state.posts)
console.log("post details",postDetails);
  // const [data, setData] = useState(postDetails);
  

  const [editingKey, setEditingKey] = useState("");
 
  const isEditing = (record) => record.id === editingKey;
 
  const edit = (record) => {
  
    form.setFieldsValue({
     title : '',
     thumbnailUrl: '',
      ...record,
    });
  
    setEditingKey(record.id);
   
   
    dispatch(updatepost(...postDetails,{record}))

  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...postDetails];
   
      dispatch(updatepost({
       
              id:id,
              title:row.tile,
              thumbnailUrl:row.thumbnailUrl,
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
      title: 'Title',
      dataIndex: 'title',
      width: '25%',
      editable: true,
    },
    {
      title: 'Image',
      dataIndex: 'thumbnailUrl',
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
            <a  disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
            </a>
          )
          }
            <Divider type="vertical" />
               <Popconfirm title="Sure to delete?"   onConfirm={()=>dispatch(deletepost(record.id))}>
               <a  disabled={editingKey !== ''} >Delete</a>
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
        inputType: col.dataIndex === 'title' ? 'text' : '',
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
        dataSource={postDetails}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
        rowKey="title" 
      />
    </Form>
  );
};

export default PostList;
