import React from 'react';
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


function NavigationBar() {
    // const[squares, setSquares] = useState(['1', '2', '3', '4', '5']);   
    const [selectedKey, setSelectedKey] = useState('0');
    const handleSelect = (e: { key: unknown; }) => {
        console.log('click ', e);//e是所点击的路由对象
        setSelectedKey(e.key);//e.key是所点击的路由对象的路径，如'/page1'
        console.log('惦记了', e.key)//验证并查看e.key是所点击的路由对象的路径是否被获取
        // navigateTo(e.key)//实现跳转的的函数（hook）
    }
    return (
        <Nav variant="tabs" activeKey={selectedKey} onSelect={handleSelect}>
            <Nav.Item >
                <Nav.Link eventKey="0" as={NavLink} to="/home">Home</Nav.Link>
            </Nav.Item >
            <Nav.Item>
                <Nav.Link eventKey="1" as={NavLink} to="/profile">Profile</Nav.Link>
            </Nav.Item>
        </Nav >
    );
}

export default NavigationBar;