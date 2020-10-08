import React, { useState } from 'react'

import { Modal, Form,Button } from 'antd';
import UserForm from './UserForm';
import Todoform from './TodoForm';

 function OpenModal({ isDisplay,visible, onCreate, onCancel }) {
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

  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new user details"
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
       
   {isDisplay ? 
        <>
        <Todoform handleChange={handleChange}/>
        </>
        :
        <>
            <UserForm/>
          
        </>
        }
   
      </Form>
    </Modal>
  );
};

export default OpenModal;