import React from 'react'
import ThemeBtn from '../ThemeBtn'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className=' m-0 p-0  mt-0 grid grid-cols-7 '>
                <div className='sm:col-span-1 sm:block  hidden' ></div>
                <div className=' min-h-max sm:col-span-5 col-span-7 bg-[#1b1b1d]'>
                    <nav className='sm:grid sm:grid-cols-12  mt-5 flex justify-between'>
                        <div className='sm:col-span-2 flex items-center justify-center' >
                            <div className='m-15 p-15 bg-[#333337] rounded-full text-white'>
                            <img className='rounded-full w-[40px] h-[40px] border-slate-400 border ' src='media/my-head.jpg' ></img>
                            </div>
                        </div>
                        <div className='sm:flex items-center sm:col-span-8 justify-center hidden' >
                            <ul id="123" className="rounded-full flex text-white bg-[#333337] leading-8 " >
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
                        <div className='sm:col-span-2 m-2 p-2 flex items-center justify-center' >
                          
                        </div>
                    </nav>
                </div>

                <div className='sm:col-span-1 sm:block hidden' ></div>

            </div>
        </header>
    )
}

