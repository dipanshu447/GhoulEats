import { FcGoogle } from "react-icons/fc";
import { GiWebSpit } from "react-icons/gi";

export default function SignUp() {
    return (
        <div className="py-6 flex px-6 sm:px-20 sm:gap-20 overflow-hidden">
            <div className="hidden sm:flex flex-col gap-4 flex-1">
            </div>
            <GiWebSpit className="absolute object-cover size-110 sm:size-130 md:size-155 top-0 -left-20 fill-white/10" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#03031e]"></div>
            <form className="border border-gray-700 px-8 py-6 relative flex flex-col gap-5 text-sm rounded-2xl bg-white/5 flex-2">
                <div className="flex flex-col gap-2">
                    <h1 className="font-[Eater] text-4xl">Sign <span className="text-[#EB5B00]">Up</span></h1>
                    <small className="text-xs">or <span className="text-[#EB5B00] hover:underline cursor-pointer">login to your account</span></small>
                </div>
                <label htmlFor="fullName" className="relative z-1 flex flex-col gap-2 w-full">
                    <span className="text-base font-light">Full Name</span>
                    <input type="text" id="fullName" className="border border-[#EB5B00] rounded-sm px-3 py-1.5 focus-visible:outline-0 focus-visible:shadow-[0px_0px_4px_0px_#EB5B00]" placeholder="Your full spooky name" />
                </label>
                <label htmlFor="Email" className="relative z-1 flex flex-col gap-2 w-full">
                    <span className="text-base font-light">Email Address</span>
                    <input type="email" id="Email" className="border border-[#EB5B00] rounded-sm px-3 py-1.5 focus-visible:outline-0 focus-visible:shadow-[0px_0px_4px_0px_#EB5B00]" placeholder="ghoul@example.com" />
                </label>
                <label htmlFor="password" className="relative z-1 flex flex-col gap-2 w-full">
                    <span className="text-base font-light">Password</span>
                    <input type="password" id="password" className="border border-[#EB5B00] rounded-sm px-3 py-1.5 focus-visible:outline-0 focus-visible:shadow-[0px_0px_4px_0px_#EB5B00]" placeholder="Choose your secret spell" />
                </label>
                <button className="py-1.5 px-4 border border-transparent bg-[#EB5B00] text-black hover:text-[#EB5B00] hover:bg-transparent hover:border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out relative z-1 font-bold mt-3">Sign Up</button>
                <small className="text-center text-gray-300">or continue with</small>
                <button className="py-1.5 px-4 border text-[#EB5B00] bg-transparent border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out relative z-1 font-bold flex gap-2 justify-center items-center"><FcGoogle className="object-cover size-4.5" /> Continue with Google</button>
            </form>
        </div>
    )
}