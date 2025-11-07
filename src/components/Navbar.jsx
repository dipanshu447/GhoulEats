import logo from '../assets/Logo.png'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const activeRoutestyle = ({isActive}) => isActive ? 'px-4 py-1.5 rounded-full font-bold transition-all duration-500 ease-in-out cursor-pointer text-[#EB5B00]' : 'px-4 py-1.5 rounded-full hover:font-bold transition-all duration-500 ease-in-out cursor-pointer hover:text-[#EB5B00]';
    return (
        <div className="px-20 py-6 flex justify-between items-center transition-all duration-500 ease-in-out sticky top-0 z-50 box-border bg-[#03031e]">
            <Link to='/' className='w-38'>
            <div className="text-2xl font-[Eater] flex">Ghoul <span className='text-[#EB5B00]'>Eats</span></div>
                {/* <img src={logo} alt="logo" className='object-cover' /> */}
            </Link>
            <div className='flex gap-4'>
                <NavLink to='/menu' className={activeRoutestyle}>Menu</NavLink>
                <NavLink to='/about' className={activeRoutestyle}>About</NavLink>
                <NavLink to='/events' className={activeRoutestyle}>Events</NavLink>
                <NavLink to='/join' className={activeRoutestyle}>Join Us</NavLink>
            </div>
            <Link to='/signup' className='px-3.5 py-1 rounded-full cursor-pointer border border-[#EB5B00] hover:bg-[#EB5B00] hover:text-black hover:font-medium transition-all duration-500 ease-in-out'>Sign Up</Link>
        </div>
    )
}