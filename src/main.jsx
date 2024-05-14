import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/body/About.jsx'
import Contact from './components/body/Contact.jsx'
import Experience from './components/body/Experience.jsx'
import Project from './components/body/Project.jsx'
import Skill from './components/body/Skill.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<About />} ></Route>
      <Route path='about' element={<About />} ></Route>
      <Route path='contact' element={<Contact />} ></Route>
      <Route path='experience' element={<Experience />} ></Route>
      <Route path='project' element={<Project />} ></Route>
      <Route path='skill' element={<Skill />} ></Route>
    </Route>
  )
)
document.body.style.backgroundColor = "#0a0a0a"
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
