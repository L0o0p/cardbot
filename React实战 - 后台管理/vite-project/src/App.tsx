// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import router from './router'

//  路由写法2️⃣
import { useState } from 'react'
import { useRoutes, Link } from "react-router-dom"
import router from './router'

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)

  return (

    <div className='App'>
      <Link to='/home'>Home</Link>|
      <Link to='/about'> About</Link>|
      <Link to='/user'> User</Link>
      {outlet}
    </div>

  )
}

export default App



// function useState(arg0: number): [any, any] {
//   throw new Error('Function not implemented.')
// }
// 路由写法1️⃣
// import { Outlet, Link } from "react-router-dom"

// function App() {


//   return (

//     <div>
//       <Link to='/home'>Home</Link>|
//       <Link to='/about'> About</Link>
//       <Outlet></Outlet>
//     </div>

//   )
// }

// export default App
