// File logic note: This file is documented for revision-friendly learning.
// Router entrypoint: defines route tree and mounts RouterProvider.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './components/Dashboard/Dashboard.jsx';
import TasksPage from './components/Tasks/TasksPage.jsx';
import Settings from './components/Settings/Settings.jsx';
import Insights from './components/Insights/Insights.jsx';
import './index.css'
import Layout from './layout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Dashboard />}/>
      <Route path='tasks' element={<TasksPage />}/>
      <Route path='insights' element={<Insights />}/>
      <Route path='settings' element={<Settings />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
