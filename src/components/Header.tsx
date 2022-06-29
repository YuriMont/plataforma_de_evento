import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export function Header() {
    return (
        <header className='w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600'>
           <Link to={'/event'}><img src={logo} alt="logo" /></Link>
        </header>
    )
}