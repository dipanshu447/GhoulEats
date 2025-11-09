import { Link } from "react-router-dom"
import { events } from "../utils/data"

export default function Eventpage() {
    return (
        <div>
            <div className="bg-[url('./assets/welcome_page/halloween_theme_bg10.jpg')] bg-center text-center flex flex-col gap-8 self-center mx-auto z-1 py-30 px-60 relative">
                <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#03031e] z-1"></div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#03031e] z-1"></div>
                <div className="flex flex-col gap-3 relative z-1">
                    <h1 className="text-6xl leading-tight font-[Eater]">Join the Feast of <span className="text-[#EB5B00]">Shadows</span>!</h1>
                    <h2 className="font-light text-[#EB5B00]">From haunted dinners to eerie costume nights - discover what’s brewing this season.</h2>
                </div>
            </div>
            <div className="flex flex-col gap-5 px-20 justify-center">
                {events.map(event => (
                    <div key={event.id} className="bg-[#0a0a25] p-6 rounded-2xl border border-[#1a1a3a] hover:border-[#ff7b00] transition-all duration-300 flex flex-col gap-2">
                        <div className="text-lg font-bold">{event.title}</div>
                        <div>Date: {event.date}</div>
                        <div>Location: {event.location}</div>
                        <p>{event.description}</p>
                        <a href='#join' className="py-1.5 px-4 border hover:bg-[#EB5B00]  text-[#EB5B00] hover:text-black bg-transparent border-[#EB5B00] hover:font-bold rounded-4xl cursor-pointer transition-all duration-500 ease-in-out self-baseline mt-3">{event.buttonText}</a>
                    </div>
                ))}
            </div>
            <div className="bg-[url('./assets/welcome_page/halloween_theme_bg4.jpg')] bg-center w-full py-32 px-40 relative z-10 mt-5 flex flex-col justify-center">
                <div className="absolute inset-0 bg-linear-to-t from-transparent to-[#03031e] z-1"></div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#03031e] z-1"></div>
                <div className="flex flex-col text-center z-10 relative">
                    <h1 className="text-6xl font-[Eater]">Join or Host an Event <span className="text-[#EB5B00]">Section</span></h1>
                    <p className="font-light text-gray-300 mt-10 font-[Jolly_Lodger] text-3xl">Want to host your own Halloween party at GhoulEats? We’ll handle the scares and snacks.</p>
                </div>
                <div className="flex gap-4 mt-8 z-10 relative mx-auto font-[Jolly_Lodger] text-2xl">
                    <Link to='/join' className="py-1.5 px-4 border border-transparent bg-[#EB5B00] text-black hover:text-[#EB5B00] hover:bg-transparent hover:border-[#EB5B00] rounded-4xl cursor-pointer transition-all duration-500 ease-in-out">Host Your Event</Link>
                </div>
            </div>
        </div>
    )
}