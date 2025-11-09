import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

export default function Navbar() {
    const activeRoutestyle = ({ isActive }) => isActive ? 'px-4 py-1.5 rounded-full font-bold transition-all duration-500 ease-in-out cursor-pointer text-[#EB5B00]' : 'px-4 py-1.5 rounded-full hover:font-bold transition-all duration-500 ease-in-out cursor-pointer hover:text-[#EB5B00]';
    const activeMobRoutestyle = ({ isActive }) => isActive ? 'px-4 py-1.5 rounded-xl font-bold transition-all duration-500 ease-in-out cursor-pointer text-[#EB5B00] bg-white/5' : 'px-4 py-1.5 rounded-xl hover:font-bold transition-all duration-500 ease-in-out cursor-pointer hover:text-[#EB5B00]';
    const [navOpen, setnavOpen] = useState(false);
    const togggleMobileNav = () => setnavOpen(prev => !prev);
    return (
        <div className='relative'>
            <div className="px-5 sm:px-8 sm:text-sm md:px-20 py-4 sm:py-6 flex justify-between items-center transition-all duration-500 ease-in-out sticky top-0 z-50 box-border bg-[#03031e]">
                <Link to='/' className='w-38'>
                    <div className="text-2xl font-[Eater] flex">Ghoul <span className='text-[#EB5B00]'>Eats</span></div>
                </Link>
                <div className='hidden gap-4 sm:flex'>
                    <NavLink to='/menu' className={activeRoutestyle}>Menu</NavLink>
                    <NavLink to='/about' className={activeRoutestyle}>About</NavLink>
                    <NavLink to='/events' className={activeRoutestyle}>Events</NavLink>
                    <NavLink to='/join' className={activeRoutestyle}>Join Us</NavLink>
                </div>
                <Link to='/signup' className='px-3.5 py-1 rounded-full cursor-pointer border border-[#EB5B00] hover:bg-[#EB5B00] hover:text-black hover:font-medium transition-all duration-500 ease-in-out hidden sm:block'>Sign Up</Link>
                <GiHamburgerMenu className='object-cover size-6 block sm:hidden cursor-pointer' onClick={togggleMobileNav} />
            </div>
            <div className={navOpen ? 'bg-[#03031e]/5 backdrop-blur-2xl px-5 py-4 w-full absolute z-20 rounded-b-xl sm:hidden top-15 transition-all duration-300' :'bg-[#03031e]/5 backdrop-blur-2xl px-5 py-4 w-full absolute z-20 rounded-b-xl -top-40 sm:hidden transition-all duration-300'}>
                <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#03031e] z-1"></div>
                <div className='gap-4 flex flex-col z-20 relative'>
                    <NavLink to='/menu' className={activeMobRoutestyle}>Menu</NavLink>
                    <NavLink to='/about' className={activeMobRoutestyle}>About</NavLink>
                    <NavLink to='/events' className={activeMobRoutestyle}>Events</NavLink>
                    <NavLink to='/join' className={activeMobRoutestyle}>Join Us</NavLink>
                </div>
            </div>
        </div>
    )
}