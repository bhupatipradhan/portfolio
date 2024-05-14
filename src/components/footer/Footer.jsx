import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className=' m-0 p-0  mt-0 grid grid-cols-7 '>
      <div className='sm:col-span-1 sm:block  hidden' ></div>
      <div className=' min-h-max sm:col-span-5 col-span-7 bg-[#1b1b1d]'>
        <div className='h-0.5 bg-[#333337] rounded-2xl'></div>
        <div className='grid grid-cols-2  ml-12 mt-5 mb-5'>
          <div className='col-span-1'>
            <div className='flex justify-start'>
              <ul id="123" className=" flex text-white leading-8 " >
                <li className="mx-[10px] cursor-pointer  hover:shadow-2xl ">
                  <NavLink to="/" className={({ isActive }) =>
                    `block leading-8 bg-transparent hover:text-cyan-300 ${isActive ? "text-cyan-400  border-b border-cyan-400  " : "text-white"}`
                  }>About</NavLink>
                </li>
                <li className="mx-[10px] cursor-pointer  hover:shadow-2xl ">
                  <NavLink to="/skill" className={({ isActive }) =>
                    `block leading-8 bg-transparent hover:text-cyan-300 ${isActive ? "text-cyan-400  border-b border-cyan-400  " : "text-white"}`
                  }>Skill</NavLink>
                </li>
                <li className="mx-[10px] cursor-pointer  hover:shadow-2xl ">
                  <NavLink to="/experience" className={({ isActive }) =>
                    `block leading-8 bg-transparent hover:text-cyan-300 ${isActive ? "text-cyan-400  border-b border-cyan-400  " : "text-white"}`
                  }>Experience</NavLink>
                </li>
                <li className="mx-[10px] cursor-pointer  hover:shadow-2xl ">
                  <NavLink to="/project" className={({ isActive }) =>
                    `block leading-8 bg-transparent hover:text-cyan-300 ${isActive ? "text-cyan-400  border-b border-cyan-400  " : "text-white"}`
                  }>Project</NavLink>
                </li>
                <li className="mx-[10px] cursor-pointer  hover:shadow-2xl ">
                  <NavLink to="/contact" className={({ isActive }) =>
                    `block leading-8 bg-transparent hover:text-cyan-300 ${isActive ? "text-cyan-400  border-b border-cyan-400  " : "text-white"}`
                  }>Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-span-1'>
            <p className='text-slate-400 text-center'>&copy;bhupati.pradhan</p>
          </div>
        </div>

      </div>

      <div className='sm:col-span-1 sm:block hidden' ></div>

    </div>
  )
}
