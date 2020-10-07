import React from 'react'
import {Form,Input} from 'antd'

 function UserForm() {
    

    return (
        <>
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
                 <Input  placeholder="please enter your name"/>
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
                <Input  placeholder="please enter your email id"/>
            </Form.Item>
        </>
    )
}

export default UserForm;