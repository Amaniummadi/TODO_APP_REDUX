import React, { useState } from 'react'

import { Modal, Form,Button,Input,DatePicker, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';

 function PostForm({ isDisplay,visible, onCreate, onCancel }) {
  // const [date, setDate] = useState(null)

  const [loading, setloading] = useState(false)
  const validateMessages = {
   
    types: {
      email: 'Email is not validate email!',
    },
  };
  const handleChange = value => {
    // const datepicker= value.format('YYYY-MM-DD')
   
      // setDate(value);
    
    };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        setloading(true)
        // const data = await wait(5000)
        setTimeout(() => {
          form.resetFields();
          onCreate(values);
       
          setloading(false)
        }, 1000);
     
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  }
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        console.log("info.file.name",info.file.name);
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new post details"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={handleSubmit}
      footer={[
        <Button key="back"   onClick={onCancel}>
           Cancel
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleSubmit} >
          Submit
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
        validateMessages={validateMessages}
      >
             <Form.Item
                name="title"
                label="Title"
                rules={[
                {
                required: true,
                message: 'Please input the title of collection!',
                },
                ]}
            >
            <Input placeholder="Title"/>
            </Form.Item>
            <Form.Item label="image" name="thumbnailUrl">
            <Upload   action= 'https://www.mocky.io/v2/5cc8019d300000980a055e76'     listType="picture">
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
          
            </Form.Item>
   
      </Form>
    </Modal>
  );
};

export default PostForm;