import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx';
import Layout from './Layout.jsx';
import Contact from './components/Contact/contact.jsx';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Layout />,
//       children : [
//         {
//           path: "",
//           element: <Home />
//         }, 
//         {
//           path: "about",
//           element: <About />
//         },
//         {
//           path: "contact",
//           element: <Contact />
//         }
//       ]
//     }
//   ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='user/:id' element={<User />}/>
      <Route path='github' element={<Github />}/>
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
