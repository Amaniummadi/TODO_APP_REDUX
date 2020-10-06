import React,{useState} from 'react'

import { Modal, Form, Input,DatePicker } from 'antd';

 function Todomodal({ visible, onCreate, onCancel }) {
    const [date, setDate] = useState(null)
    const handleChange = value => {
      const datepicker= value.format('YYYY-MM-DD')
     
        setDate(value);
      };
  const validateMessages = {
   
    types: {
      email: '${label} is not validate email!',
    },
  };

  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Add New Todo"
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
        <Form.Item label="DatePicker" name="date-picker">
       
          <DatePicker onChange={handleChange} />
        </Form.Item>
       
      
      </Form>
    </Modal>
  );
};

export default Todomodal;