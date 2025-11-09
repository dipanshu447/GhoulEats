import { Link } from "react-router-dom"

export default function ErrorPage(){
    return (
        <div className="bg-[url('./assets/about_page/bg3.jpg')] bg-center text-center flex flex-col gap-8 mx-auto z-1 py-20 sm:py-30 px-6 md:px-40 lg:px-60 relative">
            <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#03031e] z-1"></div>
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#03031e] z-1"></div>
            <div className="flex flex-col gap-2 font-[Eater] relative z-1">
                <h1 className="text-4xl md:text-6xl leading-tight text-white">Uh-oh… Something went horribly deliciously  <span className="text-[#EB5B00]">wrong</span>!</h1>
                <h2 className="font-light text-[#EB5B00]">Looks like the kitchen spirits are having a meltdown again.</h2>
            </div>
            <div className="mx-6 relative z-1 text-white md:text-base text-[10px] sm:text-sm">
                Don’t worry — our chefs are cooking up a fix.
            </div>
            <div className="flex gap-5 self-center relative z-1 text-xs sm:text-base">
                <Link to='/' className="py-1.5 px-4 border border-transparent bg-[#EB5B00] text-black hover:text-[#EB5B00] hover:bg-transparent hover:border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out"> Head back home before the cauldron boils over</Link>
            </div>
        </div>
    )
}