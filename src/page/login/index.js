import React from "react";
import {Button, Form, Input} from 'antd';
import './style.less';

export default () => {
    return <div className='login'>

        <div className='login-box'>
            <div className='login-top'>
                <div className='title'>后台管理系统</div>
                <div className='desc'>欢迎进入!</div>
            </div>
            <Form className='login-form'>
                <Form.Item
                    label="登录账号"
                    name="account"
                    rules={[{required: true, message: '请输入你的登录账号!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="登录密码"
                    name="password"
                    rules={[{required: true, message: '请输入你的登录密码!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>;
};
