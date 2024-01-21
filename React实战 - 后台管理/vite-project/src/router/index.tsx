
// 简化懒加载
// ⬇️路由写法2️⃣

import Home from '../views/Home.tsx'
// 一般加载的引入方式
// import About from '../views/About.tsx'
import { Navigate } from 'react-router-dom'
// import User from '../views/User.tsx'
// 懒加载的引入方式需要引入：
import { lazy } from 'react'
import React from 'react'

// 懒加载的引入方式
const About = lazy(() => import('../views/About.tsx'))
const User = lazy(() => import('../views/User.tsx'))

// 简化懒加载
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    {
        path: '/',
        element: <Navigate to={'<Home />'} />
    },
    {
        path: '/home',
        element: <Home />
    },
    // 懒加载
    {
        path: '/about',
        element: withLoadingComponent(<About />)
    },
    // 懒加载
    {
        path: '/user',
        element: withLoadingComponent(<User />)

    }
]

export default routes