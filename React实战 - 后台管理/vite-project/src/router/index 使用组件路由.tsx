// ⬇️路由写法1️⃣

// import App from '../App'
import Home from '../views/Home'
import About from '../views/About'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    {/* 配置-用户访问‘/’的时候，重定向到‘/home'路径内容 */}
                    <Route path='/' element={<Navigate to={'/home'} />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/about' element={<About />} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router