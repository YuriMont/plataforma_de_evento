import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

interface ClickSidebar{
    viewSidebar: boolean
    setSidebar: any;
}

export function Header({setSidebar, viewSidebar}:ClickSidebar) {
    

    function handleViewSidebar(){
        setSidebar(!viewSidebar);
    }

    return (
        <header className='w-full px-6 py-5 flex items-center justify-between bg-gray-700 border-b border-gray-600 sm:justify-center sm:px-0'>
           <Link to={'/event'}><img src={logo} alt="logo" className='w-44 h-6 sm:w-auto sm:h-auto' /></Link>
           <button onClick={handleViewSidebar} className='text-sm visible flex gap-2 justify-center items-center sm:invisible transition'>
                Aulas
                {viewSidebar ? <X size={32}/> : <List size={32} />}
           </button>
        </header>
    )
}