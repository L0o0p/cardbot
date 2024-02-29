import React, { ChangeEvent, useEffect, useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone, QuestionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input, Space, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import isEmpty from '../Server';


const App: React.FC = () => {
    // const [passwordVisible, setPasswordVisible] = React.useState(false);
    // 假设onChange={onUsernameChange}
    {/* // 定义：onChange={ } */ }
    {/* // e 是event，代表发生的事件，此处必须要写注释，下面的内容才不报错 */ }
    const [userNameVal, setUsernameVal] = useState('')
    const [userPasswordVal, setPasswordVal] = useState('')
    //e.target.val// 事件发生对象的值
    // 跳转函数
    const navigateTo = useNavigate()


    const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        {/* // 代表这个输入框里面的内容，默认为空 */ }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setUsernameVal(e.target.value)
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordVal(e.target.value)
    }

    // 定义判空函数
    const Empty = isEmpty(userNameVal, userNameVal)
    // 点击登录按钮的事件
    const onSubmit = () => {
        // alert('用户名、密码：' + userNameVal + userNameVal)
        console.log("用户输入的用户名，密码分别是：", userNameVal, userPasswordVal);
        // 验证是否有空值
        if (Empty) { return message.warning("请完整输入信息！") }
        const a = axios.post(
            "http://localhost:3000/login",
            { userNameVal, userPasswordVal }
        )
        a.then(response => {
            console.log(response.data.accessToken);
        })
        // 登陆成功跳转大主页
        navigateTo('/home')
    }

    return (
        <>

            <Space direction="vertical">
                <Input placeholder="username" onChange={onUsernameChange} prefix={< UserOutlined />} >
                </Input>
                <Input.Password
                    onChange={onPasswordChange}
                    prefix={<QuestionOutlined />}
                    placeholder="password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Button onClick={onSubmit}>submit</Button>
            </Space>
        </>
    );
};

export default App;

// function setState(arg0: string): [any, any] {
//     throw new Error('Function not implemented.');
// }
