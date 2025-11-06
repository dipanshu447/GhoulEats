import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout(){
    return (
        <div className="box-border w-screen h-screen bg-[#1b0917] text-white">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}