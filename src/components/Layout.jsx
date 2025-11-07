import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="box-border bg-[#03031e] text-white font-[Stack_Sans_Text]">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}