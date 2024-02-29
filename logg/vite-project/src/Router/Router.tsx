import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Page/Login';
import Home from '../Page/Home';
import { Component } from 'react';
import NavB from '../NavB/NavB';
import Profile from '../Page/Profile';

export default class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavB />
                <Routes>
                    <Route path='*' element={<Navigate to='/' />}></Route>
                    {/* <Route path='*' element={<Navigate to='/' />}></Route> */}
                    <Route path='/' element={<Navigate to='/login' />}></Route>
                    <Route path='/home' element={<Home></Home>}></Route>
                    <Route path='/profile' element={<Profile></Profile>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                </Routes>
            </BrowserRouter>)
    }
}