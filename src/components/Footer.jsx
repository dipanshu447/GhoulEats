import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoDevTo } from "react-icons/bi";

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-[url('./assets/Footerbg.png')] bg-center grid grid-cols-4 z-10 relative mt-10 py-20 px-20 gap-10">
            <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#03031e] z-1"></div>
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#03031e] z-1"></div>
            <div className="relative z-1 flex flex-col gap-3">
                <div>
                    <Link to='/' className="text-2xl font-[Eater] flex">Ghoul <span className='text-[#EB5B00]'>Eats</span></Link>
                    <small className="text-gray-300">Feeding hungry souls since 1666.</small>
                </div>
                <div className="flex gap-4 items-center">
                    <a href='https://x.com/dipanshu447' target="_blank">
                        <FaXTwitter className="hover:fill-[#EB5B00] hover:drop-shadow-[0_0_10px_#ff7b00] transition-all duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/dipanshu447/" target="_blank">
                        <FaLinkedinIn className="hover:fill-[#EB5B00] hover:drop-shadow-[0_0_10px_#ff7b00] transition-all duration-300" />
                    </a>
                    <a href="https://dev.to/dipanshu447" target="_blank">
                        <BiLogoDevTo className="hover:fill-[#EB5B00] hover:drop-shadow-[0_0_10px_#ff7b00] transition-all duration-300" />
                    </a>
                    <a href="mailto:dipanshusahu447@gmail.com" target="_blank">
                        <MdOutlineMail className="hover:fill-[#EB5B00] hover:drop-shadow-[0_0_10px_#ff7b00] transition-all duration-300" />
                    </a>
                </div>
            </div>
            <div className="relative z-1 flex flex-col gap-4">
                <div>
                    <div className="text-xl flex">Quick Links</div>
                </div>
                <div className="flex gap-2 flex-col font-extralight text-sm">
                    <Link to="/" className="hover:text-[#EB5B00] transition-all duration-300 cursor-pointer">Home</Link>
                    <Link to="/menu" className="hover:text-[#EB5B00] transition-all duration-300 cursor-pointer">Menu</Link>
                    <Link to="/about" className="hover:text-[#EB5B00] transition-all duration-300 cursor-pointer">About Us</Link>
                    <Link to="/join" className="hover:text-[#EB5B00] transition-all duration-300 cursor-pointer">Join the Feast</Link>
                    <a href="#" className="hover:text-[#EB5B00] transition-all duration-300 cursor-pointer">Contact Us</a>
                </div>
            </div>
            <div className="relative z-1 flex flex-col">
                <div>
                    <div className="text-xl flex mb-4">Newsletter</div>
                    <small className="font-light">Sign up for our Nightly Bites, exclusive spooky offers, new dish alerts, and blood-curdling discounts!</small>
                </div>
                <input type="email" placeholder="Enter your email" className="border-[#EB5B00] border px-2.5 rounded-md py-2 text-sm my-4" />
                <button className='px-3.5 py-1 rounded-full cursor-pointer border border-[#EB5B00] bg-[#EB5B00] hover:font-medium transition-all duration-500 ease-in-out text-sm'>Subscribe</button>
            </div>
            <div className="relative z-1 flex flex-col items-end text-right">
                <div className="text-xl flex mb-4">Legal & Credits</div>
                <small className="font-light">© 2025 GhoulEats. Crafted by the undead. All rights reserved.</small>
            </div>
        </div>
    )
}