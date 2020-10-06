import React from 'react'

import { Modal, Form, Input } from 'antd';

 function Usermodal({ visible, onCreate, onCancel }) {
  
  const validateMessages = {
   
    types: {
      email: '${label} is not validate email!',
    },
  };

  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new user details"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
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
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      </Form>
    </Modal>
  );
};

export default Usermodal;