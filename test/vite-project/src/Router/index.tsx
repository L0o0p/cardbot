import React, { // Children, 
    lazy
} from "react"
// Navigate重定向组件
import { Navigate } from "react-router-dom"
// import Page1 from '@/views/Page1'

import Home from '@/views/Home'
// import Login from "../views/Login/index.tsx"

const Page1 = lazy(() => import('@/views/Page1'))
// const Page2 = lazy(() => import("../views/Page2.tsx"))
// const Page301 = lazy(() => import("../views/Page301.tsx"))
// const Page302 = lazy(() => import("../views/Page302.tsx"))
// const About = lazy(() => import("../views/About.tsx"))




const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [

    //  嵌套路由 开始-------------------
    // {
    //     path: "/",
    //     element: <Navigate to="/page1" />
    // },
    // 没有定义的路径重定向
    {
        path: "*",
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page2",
                element: withLoadingComponent(<Page1 />)
            },
            // {
            //     path: "/page2",
            //     element: withLoadingComponent(<Page2 />)
            // },
            // {
            //     path: "/page3/page301",
            //     element: withLoadingComponent(<Page301 />)
            // },
            // {
            //     path: "/page3/page302",
            //     element: withLoadingComponent(<Page302 />)
            // },
            // {
            //     path: "/page4/page401",
            //     element: withLoadingComponent(<About />)
            // },
            // {
            //     path: "/page4/page402",
            //     element: withLoadingComponent(<About />)
            // }
        ]
    }]

export default routes