import React from 'react'
import { Form,Input,DatePicker} from 'antd'

 function Todoform({handleChange}) {
    

    return (
        <>
            <Form.Item
                name="Action"
                label="Action"
                rules={[
                {
                required: true,
                message: 'Please input the title of collection!',
                },
                ]}
            >
            <Input placeholder="Action"/>
            </Form.Item>
            <Form.Item label="DatePicker" name="date-picker">

            <DatePicker onChange={handleChange} placeholder="select date"/>
            </Form.Item>
        </>
    )
}

export default Todoform;